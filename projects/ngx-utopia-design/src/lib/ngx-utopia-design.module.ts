import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import {CommonModule} from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    NavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    NavbarComponent,
    CardComponent]
})
export class NgxUtopiaDesignModule { }
