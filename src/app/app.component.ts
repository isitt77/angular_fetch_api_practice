import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Fetch API Practice';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getApi();
  }

  getApi() {
    this.http.get('https://services5.arcgis.com/4LKAHwqnBooVDUlX/arcgis/rest/services/LandClassification/FeatureServer/68/query?where=1%3D1&outFields=*&outSR=4326&f=json').subscribe(
      {
        next: response => console.log(response),
        error: error => console.log(error)
      }
    )
  }

}
