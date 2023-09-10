import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab8',
  templateUrl: 'tab8.page.html',
  styleUrls: ['tab8.page.scss']
})
export class Tab8Page {
  destinatario: string = '';
  asunto: string = '';
  mensaje: string = '';

  constructor(private http: HttpClient) {}

  enviarCorreo() {
    // Realiza una solicitud HTTP para enviar el correo al backend
    const correo = {
      destinatario: this.destinatario,
      asunto: this.asunto,
      mensaje: this.mensaje
    };

    this.http.post<any>('http://tu-backend.com/enviar-correo', correo).subscribe(
      (response) => {
        console.log('Correo enviado con éxito', response);
        // Aquí puedes agregar lógica adicional, como mostrar una confirmación al usuario.
      },
      (error) => {
        console.error('Error al enviar el correo', error);
        // Maneja el error, muestra un mensaje al usuario, etc.
      }
    );
  }
}
