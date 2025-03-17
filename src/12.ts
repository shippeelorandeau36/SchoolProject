import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  title = 'School Project';

  getData() {
    this.http.get('https://api.example.com/data').subscribe((response: any) => {
      console.log(response);
    });
  }
}