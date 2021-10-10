import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {UtpRoutes} from '../interfaces/utp-routes';

@Component({
  selector: 'utp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  @Input() selectedIndex = 0;
  @Input() routes: UtpRoutes[];
  @Input() logoType: 'logo' | 'title' | 'both' = 'title';
  @Input() logoSrc: string;
  @Input() title: string;
  @Input() border = false;
  @Input() width = '200px';
  @Input() navItemsPosition: 'left' | 'right' = 'right';
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() customLogoTitleTemplate: TemplateRef<any>;
  @Input() collapse = false;
  @Output() ngOnCollapse = new EventEmitter<any>();
  constructor() { }

  selected(i: any): void {
    this.selectedIndex = i;
    if (!this.collapse) {
      this.collapse = true;
      this.ngOnCollapse.emit(this.collapse);
    }
  }

  ngOnInit(): void {
    const path = window.location;
    if (path !== undefined) {
      if (path.href.includes('#')) {
        this.selectedIndex = this.routes.findIndex(page => page.path.toLowerCase().includes(path.hash.split('#')[1].split('/')[1].toLowerCase()));
      } else {
        this.selectedIndex = this.routes.findIndex(page => page.path.toLowerCase().includes(path.pathname.split('/')[1].toLowerCase()));
      }
    }
  }

  onCollapse(): void{
    this.ngOnCollapse.emit(this.collapse);
  }
}
