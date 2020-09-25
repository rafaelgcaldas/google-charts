import { Injectable } from '@angular/core';

declare let google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleChartService {

  private google: any;

  constructor() {
    this.google = google;
  }

  getGoogle() {
    return this.google;
  }
}
