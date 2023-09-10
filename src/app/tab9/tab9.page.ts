import { Component, AfterViewInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import { HttpClient } from '@angular/common/http';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-tab9',
  templateUrl: 'tab9.page.html',
  styleUrls: ['tab9.page.scss']
})
export class Tab9Page implements AfterViewInit {

  calendarOptions: any; // Agrega la propiedad calendarOptions

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    const calendarElement = document.getElementById('calendar');
  
    if (calendarElement) {
      const calendar = new Calendar(calendarElement, {
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin],
        events: (fetchInfo, successCallback, failureCallback) => {
          // Hacer una solicitud HTTP para obtener eventos desde el backend
          this.http.get<any[]>('http://localhost:8000/reservas').subscribe(
            (data) => {
              // Procesar los datos y formatearlos para FullCalendar
              const events = data.map((event) => ({
                title: event.title,
                start: event.start,
              }));
              successCallback(events);
            },
            (error) => {
              console.error('Error al obtener eventos:', error);
              failureCallback(error);
            }
          );
        },
        // Resto de opciones del calendario
      });
  
      calendar.render();
    }
  }
}
