import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'utp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
 @Input() cardTitleRef: TemplateRef<any>;
}
