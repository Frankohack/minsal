import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page implements OnInit {
  doctors: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Realiza la solicitud GET para obtener la lista de doctores
    const url = 'http://localhost:8000/.doctores';

    this.http.get<any[]>(url).subscribe(
      (data) => {
        console.log(data);
        this.doctors = data;
      },
      (error) => {
        console.error('Error al obtener datos de doctores:', error);
      }
    );
  }
}