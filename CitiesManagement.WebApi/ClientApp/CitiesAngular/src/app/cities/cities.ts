import { Component } from '@angular/core';
import { City } from '../models/city';
import { CityServices } from '../Services/city.services';

@Component({
  selector: 'app-cities',
  imports: [],
  templateUrl: './cities.html',
  styleUrl: './cities.css',
})
export class Cities {

  cities : City[]= [];

  constructor(private cityServices :CityServices )
  {

  }
  // ngOnInit()
  // {
  //   this.cities= this.cityServices.getCities();
  // }
  ngOnInit()
  {
    this.cityServices.getCities()
    .subscribe({
     next: (response : City[])=>{this.cities= response;},
     error: (error: any)=>{console.log(error)},
    complete:  ()=> {}
     } );
  }
  
}
