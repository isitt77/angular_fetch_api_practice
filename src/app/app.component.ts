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
    this.http.get('https://api.ebird.org/v2/ref/taxonomy/ebird?species=hottea1&version=2022').subscribe(
      {
        next: response => response,
        error: error => console.log(error)
      }
    )
  }

}
