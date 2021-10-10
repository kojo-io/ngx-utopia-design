import {Component, Input, OnInit} from '@angular/core';
import {Routes} from '@angular/router';



@Component({
  selector: 'utp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() routes: Array<Routes> [];
  constructor() { }

}
