import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService 
{
  private userUrl = 'api/user';
  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> 
  {
    return this.http.get<User[]>(this.userUrl).pipe();
  }
}
