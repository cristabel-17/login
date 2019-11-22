import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService 
{
  static getUser() {
    throw new Error("Method not implemented.");
  }
  private userUrl = 'api/user';
  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> 
  {
    return this.http.get<User[]>(this.userUrl).pipe();
  }
  save(user: User)
  {
    console.log("usuario guardado correctamente", user);
    return this.http.post<User>(this.userUrl, user).pipe();
  }
}
