import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-school-project',
  templateUrl: './school-project.component.html',
  styleUrls: ['./school-project.component.css']
})
export class SchoolProjectComponent {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.github.com/repos/angular/angular').subscribe(response => {
      console.log(response);
    });
  }
}
