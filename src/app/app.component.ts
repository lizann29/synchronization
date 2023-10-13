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
  isLoading = false;
  constructor(private http: HttpClient) {} 

  fetchData() {
    this.isLoading = true; 
    const url = 'https://localhost:7067/GetAllCards';

    this.http.get(url).subscribe({
      next: (data) => {
        this.isLoading = false; 
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Synchronization completed successfully',
          confirmButtonColor: 'rgb(0, 128, 0)',
        });
      },
      error: (error) => {
        this.isLoading = false;
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
