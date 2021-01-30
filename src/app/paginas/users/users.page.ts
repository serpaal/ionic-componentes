import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

interface Geo {
  lat: Number,
  lon: Number
}

interface Address {
  street: String,
  suite: String,
  city: String,
  zip_code: String,
  geo: Geo
}

interface Company {
  name: String,
  catchPhrase: String,
  bs: String
}

interface User {
  id: Number,
  name: String,
  username: String,
  email: String,
  address: Address,
  phone: String,
  website: String,
  company: Company
}

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  @ViewChild(IonList) ionList : IonList;
  usuarios: Observable<any>;
  users: any[] = [];
  //users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .then(data => {
     this.users = data;
    });

    this.usuarios = this.userService.getUsuarios();
  }

  favorite(user){
    console.log(user);
    this.ionList.closeSlidingItems();
  }

  share(user){
    console.log(user);
  }

  unread(user){
    console.log(user);
  }

}
