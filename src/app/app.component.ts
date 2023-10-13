import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'synchronization';

  constructor(private http: HttpClient) {} 

  fetchData() {
    const url = 'https://syncgelioswisolbe.mygps.ge:4440/GetAllCards';
    this.http.get(url).subscribe({
 
    next: (data) => {
        // console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Synchronization completed successfully',
          confirmButtonColor: 'rgb(0, 128, 0)',

        });
      },
      error:
      (error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!', 
          confirmButtonColor: 'rgb(255, 0, 0)',
        });
      }
  });
  }
}

