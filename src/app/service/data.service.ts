import { Injectable } from '@angular/core';
import { configuration } from "src/app/config/configuration"
@Injectable({
  providedIn: 'root'
})
export class DataService {

  celui= configuration
  
  constructor() { }

  getData(){
    return this.celui;
  }

}
