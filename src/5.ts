import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SchoolProject';
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get('https://api.github.com/repos/angular/angular').subscribe(res => console.log(res));
  }
}
