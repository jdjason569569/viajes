import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CountryService } from 'src/app/services/country.service';
import { Region } from '../../models/region';
import { Country } from '../../models/country';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit {

  load: boolean = false;
  listRegions?: Region[] =[];
  listCountries?: Country[] =[];
  listCountriesToVisit?: Country[] =[];
  regionSelected? : string = 'EU'


  constructor(private countryService: CountryService) { }

  ngOnInit(): void {

    forkJoin(
      [this.countryService.getCountriesByRegion('eu'),
      this.countryService.getAllRegions()]
    ).subscribe(response =>{
       this.listCountries = response[0];
       this.listRegions = response[1];
       this.load = true;
    }, error =>{
         console.log(error);
         this.load = false;
    });
  }
  filterCountries(event: any){
    this.countryService.getCountriesByRegion(event.value).subscribe(response=>{
      this.listCountries = response;
    });

  }

}
