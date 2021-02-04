import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
   
  
   constructor( private http: HttpClient) { }
 
   getMenu()  {      
    const url = '/assets/data/menu.json';    

     return this.http.get<any>(`${url}`, {  });
   }   
   
}
