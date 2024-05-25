import { CommonModule } from '@angular/common';
import { Component,  Input, OnInit, } from '@angular/core';

@Component({
  selector: 'ng-progress-square',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles/progress-square.scss'],
  template: `
    <body>
      <div class="progress-bar" [ngStyle]="{'background-color': colorBackground}">
        <div
          [ngStyle]="{ width: getMileStonePercentage() + '%'  , 'background-color': color }"
          class="progress-custom"
        ></div>
      </div>
    </body>
  `,
  styles: ``,
})
export class ProgressSquareComponent implements OnInit {

  @Input() value: Number = 30;
  @Input() color: string = '#4a7bff';
  @Input() colorBackground: string = '#11154a';

  ngOnInit(): void {

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
