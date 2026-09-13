import { Injectable } from '@angular/core';
import { City } from '../models/city';
import {HttpClient} from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs/dist/types/internal/Observable';

// import {HttpClient} from "@angular/common/http";
// import {Observable} from "rjxs";

@Injectable({
  providedIn: 'root',
})
export class CityServices {


  cities :City []= [];
//   constructor ()
//   {
//     this.cities= [
//     new City("101", "Lakhisarai"),
//     new City("102", "Amesterdam"),
//     new City("103", "Alaska"),
//     new City("104", "Oslo"),
//     new City("105", "Manhattan"),
//   ];
// }
// public getCities(){
//   return this.cities;
// }

//data from backend
constructor (private httpClient : HttpClient)
{}
  public getCities() :Observable<City[]>
  {
    return this.httpClient.get<City[]>("http://localhost:5292/cities");
  }
}
