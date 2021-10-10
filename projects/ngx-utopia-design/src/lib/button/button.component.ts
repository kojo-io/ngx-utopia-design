import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'utp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() label = '';
  @Input() color: 'primary' | 'danger' | 'success' | 'black' | 'info' = 'primary';
  @Input() fontWeight: 'bold' | 'semi-bold' | 'normal' = 'semi-bold';
  @Input() rounded: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' = 'none';
  @Input() block = false;
  @Input() size: 'small' | 'normal' | 'large' = 'normal';
  @Input() disabled = false;
  constructor() { }

  ngOnInit(): void {
  }
}
