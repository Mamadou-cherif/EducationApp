import { Component, OnInit } from '@angular/core';

import {DataService } from "src/app/service/data.service"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private config: DataService) { }

  a: any

  ngOnInit(): void {
   

  }

  getFromService(){
    return this.config.celui
  }


  
}
