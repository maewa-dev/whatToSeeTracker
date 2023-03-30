import { Component, OnInit } from '@angular/core';
import { Series } from 'src/app/interfaces/series';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  constructor(
    private seriesService: SeriesService
  ) { 
    this.seriesService.bestSeries.subscribe(resp=>{
      if(Array.isArray(resp)){
        this.bestSeries = resp;
      } 
    });
  }

  bestSeries : Series[] = [];

  ngOnInit() {
    this.seriesService.series.subscribe(resp=>{
      if(Array.isArray(resp)){
        this.bestSeries = resp;
      } 
    });
  }

}
