import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { ICountry } from '../interface/icountry';
import { Country } from '../models/country';
import { IRegion } from '../interface/iregion';
import { Region } from '../models/region';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountriesByRegion(region: any): Observable<ICountry[]>{
     return this.http.get<ICountry[]>('https://restcountries.com/v2/regionalbloc/' + region)
     .pipe(
       map(data => data.map(d => new Country(d)))
     )
  }

  getAllRegions(){
     return this.http.get<IRegion[]>('assets/data/regions.json')
     .pipe(
      map(data => data.map(d => new Region(d)))
    )
  }
}
