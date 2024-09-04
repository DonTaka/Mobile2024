import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { HeaderComponent } from '../Base/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatProgressSpinner,
  ],
  declarations: [HomePage, HeaderComponent],
})
export class HomePageModule {}
