import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class ProgressSquareComponent {
    constructor() {
        this.value = 30;
        this.color = '#4a7bff';
        this.colorBackground = '#11154a';
        this.type = 'linear';
        this.animate = false;
        this.isOpen = true;
    }
    ngOnInit() {
        setTimeout(() => {
            this.isOpen = !this.isOpen;
        }, 500);
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.9", type: ProgressSquareComponent, isStandalone: true, selector: "ng-progress-square", inputs: { value: "value", color: "color", colorBackground: "colorBackground", type: "type", animate: "animate" }, ngImport: i0, template: "<body>\n  <!-- ================================ LINEAR PROGRESS ================================ -->\n\n  <!-- Animation Linear Progress square -->\n  \n  <div class=\"progress-bar\" [ngStyle]=\"{ 'background-color': colorBackground }\" *ngIf=\"animate && type=== 'linear'\" >\n    <div\n      [@increaseWidth]=\"{\n        value: isOpen ? 'start' : 'end',\n        params: { color: color, value: getMileStonePercentage() }\n      }\"\n      class=\"progress-custom\"\n    ></div>\n  </div>\n\n <!-- Simple Linear Progress square -->\n\n <div class=\"progress-bar\" [ngStyle]=\"{'background-color': colorBackground}\" *ngIf=\"!animate && type=== 'linear'\">\n  <div\n    [ngStyle]=\"{ width: getMileStonePercentage() + '%'  , 'background-color': color }\"\n    class=\"progress-custom\"\n  ></div>\n</div>\n\n</body>\n", styles: [".progress-bar{height:12px;width:100%}.progress-bar .progress-custom{height:12px}.animated-box{background-color:#add8e6;height:100px;width:100px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], animations: [
            trigger('increaseWidth', [
                state('start', style({
                    width: '0%',
                    height: '12px',
                    backgroundColor: '{{color}}',
                }), { params: { color: '#4a7bff' } }),
                state('end', style({
                    width: '{{value}}%',
                    height: '12px',
                    backgroundColor: '{{color}}',
                }), { params: { color: '#4a7bff', value: 30 } }),
                transition('start => end', [animate('1s')]),
                transition('start => end', [animate('0.5s')]),
            ]),
        ] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.9", ngImport: i0, type: ProgressSquareComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ng-progress-square', standalone: true, imports: [CommonModule], animations: [
                        trigger('increaseWidth', [
                            state('start', style({
                                width: '0%',
                                height: '12px',
                                backgroundColor: '{{color}}',
                            }), { params: { color: '#4a7bff' } }),
                            state('end', style({
                                width: '{{value}}%',
                                height: '12px',
                                backgroundColor: '{{color}}',
                            }), { params: { color: '#4a7bff', value: 30 } }),
                            transition('start => end', [animate('1s')]),
                            transition('start => end', [animate('0.5s')]),
                        ]),
                    ], template: "<body>\n  <!-- ================================ LINEAR PROGRESS ================================ -->\n\n  <!-- Animation Linear Progress square -->\n  \n  <div class=\"progress-bar\" [ngStyle]=\"{ 'background-color': colorBackground }\" *ngIf=\"animate && type=== 'linear'\" >\n    <div\n      [@increaseWidth]=\"{\n        value: isOpen ? 'start' : 'end',\n        params: { color: color, value: getMileStonePercentage() }\n      }\"\n      class=\"progress-custom\"\n    ></div>\n  </div>\n\n <!-- Simple Linear Progress square -->\n\n <div class=\"progress-bar\" [ngStyle]=\"{'background-color': colorBackground}\" *ngIf=\"!animate && type=== 'linear'\">\n  <div\n    [ngStyle]=\"{ width: getMileStonePercentage() + '%'  , 'background-color': color }\"\n    class=\"progress-custom\"\n  ></div>\n</div>\n\n</body>\n", styles: [".progress-bar{height:12px;width:100%}.progress-bar .progress-custom{height:12px}.animated-box{background-color:#add8e6;height:100px;width:100px}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], color: [{
                type: Input
            }], colorBackground: [{
                type: Input
            }], type: [{
                type: Input
            }], animate: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { ProgressSquareComponent };
//# sourceMappingURL=progress-square.mjs.map
