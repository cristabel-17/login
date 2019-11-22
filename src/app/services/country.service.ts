import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countryUrl = 'api/country';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Country[]> 
  {
    return this.http.get<Country[]>(this.countryUrl).pipe();
  }
}
