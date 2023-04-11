import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEntity } from './user-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

       constructor(private httpClient:HttpClient) { }

       baseURL:string="http://localhost:9090/user";
       addUser(user:UserEntity):
       Observable<Object>
       {
       // return this.httpClient.post(`${this.baseURL}/${"add"}`, user);
       return this.httpClient.post(`${"http://localhost:9090/user/add"}`,user);
       }

       getAllUser():
       Observable<UserEntity[]>
       {
        return this.httpClient.get<UserEntity[]>(`${this.baseURL}/${"getAll"}`);
       }

       getUserById(id:number):
       Observable<UserEntity>
       {
        return this.httpClient.get<UserEntity>(`${this.baseURL}/${id}`);
       }

       deleteById(id:number):
       Observable<Object>
       {
            return this.httpClient.delete(`${this.baseURL}/${"delete"}/${id}`);
       }

       updateById(id:number,user:UserEntity):
       Observable<Object>
       {
        return this.httpClient.put(`${this.baseURL}/${"update"}/${id}`,user);
       }

}
