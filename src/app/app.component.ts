import { Component, } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'synchronization';

  constructor(private http: HttpClient) {} 

  fetchData() {
    const url = ''; 

    this.http.get(url).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}



