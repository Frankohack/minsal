import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { IonicModule } from '@ionic/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Tab9PageRoutingModule } from './tab9-routing.module';

import { Tab9Page } from './tab9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab9PageRoutingModule,
    FullCalendarModule
  ],
  declarations: [Tab9Page], // Agrega el componente a las declaraciones
})

export class Tab9PageModule {}

