import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar HttpClientModule
import { FormsModule } from '@angular/forms';
import { Tab7Page } from './tab7.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab7PageRoutingModule } from './tab7-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab7PageRoutingModule,
    HttpClientModule // Añade HttpClientModule a la lista de módulos importados
  ],
  declarations: [Tab7Page]
})
export class Tab7PageModule {}