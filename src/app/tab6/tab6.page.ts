import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss']
})
export class Tab6Page {
  nombres: string = "";
  apellidos: string = "";
  usuario: string = "";
  contrasena: string = "";
  rut: string = "";
  telefono: number = 0;
  region: string = "";
  comuna: string = "";
  direccion: string = "";
  numero: number = 0;

  registroExitoso: boolean = false;

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  registrarUsuario() {
    const nuevoUsuario = {
      correo: this.usuario,
      contraseña: this.contrasena,
      nombres: this.nombres,
      apellidos: this.apellidos,
      rut: this.rut,
      numero: this.numero,
      region: this.region,
      comuna: this.comuna,
      direccion: this.direccion,
      telefono: this.telefono
    };
  
    // Reemplaza 'http://localhost:8000' con la dirección de tu servidor backend
    const backendUrl = 'http://localhost:8000'; // Cambia esta URL
    const registroUrl = `${backendUrl}/crear`;
  
    // Realizar la solicitud HTTP POST al backend
    this.http.post(registroUrl, nuevoUsuario)
      .subscribe(
        (response) => {
          console.log('Usuario registrado:', response);
          this.registroExitoso = true; // Marcar el registro como exitoso
        },
        (error) => {
          console.error('Error al registrar usuario:', error);
          // Puedes mostrar un mensaje de error aquí
        }
      );
  }

  irAPagina5() {
    this.navCtrl.navigateForward('/tabs/tab5');
  }
}
