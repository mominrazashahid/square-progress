import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-progress-square',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles/progress-square.scss'],
  templateUrl: './progress-square.component.html',
  animations: [
    trigger('increaseWidth', [
      state(
        'start',
        style({
          width: '0%',
          height: '12px',
          backgroundColor: '{{color}}',
        }),
        { params: { color: '#4a7bff' } }
      ),
      state(
        'end',
        style({
          width: '{{value}}%',
          height: '12px',
          backgroundColor: '{{color}}',
        }),
        { params: { color: '#4a7bff', value: 30 } }
      ),
      transition('start => end', [animate('1s')]),
      transition('start => end', [animate('0.5s')]),
    ]),
  ],
})
export class ProgressSquare implements OnInit {
  @Input() value: Number = 30;
  @Input() color: string = '#4a7bff';
  @Input() colorBackground: string = '#11154a';
  @Input() type: string = 'linear';
  @Input() animate: boolean = false;

  public isOpen = true;
  
  ngOnInit(): void {
    setTimeout(() => {
      this.isOpen = !this.isOpen;
    }, 500);
  }

  public getMileStonePercentage() {
    let valuePercentage = 0;
    const value = this.value;
    if (Number(value) > 100) {
      valuePercentage = 100;
    } else {
      valuePercentage = Number(value);
    }
    return valuePercentage;
  }
}
