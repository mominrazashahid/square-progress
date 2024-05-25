import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';

class ProgressSquareComponent {
    constructor() {
        this.value = 30;
        this.color = '#4a7bff';
        this.colorBackground = '#11154a';
    }
    ngOnInit() {
    }
    getMileStonePercentage() {
        let valuePercentage = 0;
        const value = this.value;
        if (Number(value) > 100) {
            valuePercentage = 100;
        }
        else {
            valuePercentage = Number(value);
        }
        return valuePercentage;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.9", ngImport: i0, type: ProgressSquareComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.9", type: ProgressSquareComponent, isStandalone: true, selector: "ng-progress-square", inputs: { value: "value", color: "color", colorBackground: "colorBackground" }, ngImport: i0, template: `
    <body>
      <div class="progress-bar" [ngStyle]="{'background-color': colorBackground}">
        <div
          [ngStyle]="{ width: getMileStonePercentage() + '%'  , 'background-color': color }"
          class="progress-custom"
        ></div>
      </div>
    </body>
  `, isInline: true, styles: [".progress-bar{height:12px;width:100%}.progress-bar .progress-custom{height:12px}\n", ""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.9", ngImport: i0, type: ProgressSquareComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ng-progress-square', standalone: true, imports: [CommonModule], template: `
    <body>
      <div class="progress-bar" [ngStyle]="{'background-color': colorBackground}">
        <div
          [ngStyle]="{ width: getMileStonePercentage() + '%'  , 'background-color': color }"
          class="progress-custom"
        ></div>
      </div>
    </body>
  `, styles: [".progress-bar{height:12px;width:100%}.progress-bar .progress-custom{height:12px}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], color: [{
                type: Input
            }], colorBackground: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { ProgressSquareComponent };
//# sourceMappingURL=ng-progress-square.mjs.map
