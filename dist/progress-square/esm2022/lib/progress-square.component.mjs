import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ProgressSquareComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3F1YXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3Byb2dyZXNzLXNxdWFyZS9zcmMvbGliL3Byb2dyZXNzLXNxdWFyZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wcm9ncmVzcy1zcXVhcmUvc3JjL2xpYi9wcm9ncmVzcy1zcXVhcmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLE9BQU8sRUFDUCxVQUFVLEdBQ1gsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQWlDL0MsTUFBTSxPQUFPLHVCQUF1QjtJQS9CcEM7UUFnQ1csVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixVQUFLLEdBQVcsU0FBUyxDQUFDO1FBQzFCLG9CQUFlLEdBQVcsU0FBUyxDQUFDO1FBQ3BDLFNBQUksR0FBVyxRQUFRLENBQUM7UUFDeEIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUUzQixXQUFNLEdBQUcsSUFBSSxDQUFDO0tBa0J0QjtJQWhCQyxRQUFRO1FBQ04sVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzdCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFTSxzQkFBc0I7UUFDM0IsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDeEIsZUFBZSxHQUFHLEdBQUcsQ0FBQztRQUN4QixDQUFDO2FBQU0sQ0FBQztZQUNOLGVBQWUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUNELE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7OEdBeEJVLHVCQUF1QjtrR0FBdkIsdUJBQXVCLGdNQ3pDcEMsb3pCQXlCQSwyTURaWSxZQUFZLDBNQUdWO1lBQ1YsT0FBTyxDQUFDLGVBQWUsRUFBRTtnQkFDdkIsS0FBSyxDQUNILE9BQU8sRUFDUCxLQUFLLENBQUM7b0JBQ0osS0FBSyxFQUFFLElBQUk7b0JBQ1gsTUFBTSxFQUFFLE1BQU07b0JBQ2QsZUFBZSxFQUFFLFdBQVc7aUJBQzdCLENBQUMsRUFDRixFQUFFLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUNqQztnQkFDRCxLQUFLLENBQ0gsS0FBSyxFQUNMLEtBQUssQ0FBQztvQkFDSixLQUFLLEVBQUUsWUFBWTtvQkFDbkIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsZUFBZSxFQUFFLFdBQVc7aUJBQzdCLENBQUMsRUFDRixFQUFFLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQzVDO2dCQUNELFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0MsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQzlDLENBQUM7U0FDSDs7MkZBRVUsdUJBQXVCO2tCQS9CbkMsU0FBUzsrQkFDRSxvQkFBb0IsY0FDbEIsSUFBSSxXQUNQLENBQUMsWUFBWSxDQUFDLGNBR1g7d0JBQ1YsT0FBTyxDQUFDLGVBQWUsRUFBRTs0QkFDdkIsS0FBSyxDQUNILE9BQU8sRUFDUCxLQUFLLENBQUM7Z0NBQ0osS0FBSyxFQUFFLElBQUk7Z0NBQ1gsTUFBTSxFQUFFLE1BQU07Z0NBQ2QsZUFBZSxFQUFFLFdBQVc7NkJBQzdCLENBQUMsRUFDRixFQUFFLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUNqQzs0QkFDRCxLQUFLLENBQ0gsS0FBSyxFQUNMLEtBQUssQ0FBQztnQ0FDSixLQUFLLEVBQUUsWUFBWTtnQ0FDbkIsTUFBTSxFQUFFLE1BQU07Z0NBQ2QsZUFBZSxFQUFFLFdBQVc7NkJBQzdCLENBQUMsRUFDRixFQUFFLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQzVDOzRCQUNELFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDM0MsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3lCQUM5QyxDQUFDO3FCQUNIOzhCQUdRLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIGFuaW1hdGUsXG4gIHRyYW5zaXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctcHJvZ3Jlc3Mtc3F1YXJlJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHN0eWxlVXJsczogWycuL3N0eWxlcy9wcm9ncmVzcy1zcXVhcmUuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3Mtc3F1YXJlLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2luY3JlYXNlV2lkdGgnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3N0YXJ0JyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHdpZHRoOiAnMCUnLFxuICAgICAgICAgIGhlaWdodDogJzEycHgnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3t7Y29sb3J9fScsXG4gICAgICAgIH0pLFxuICAgICAgICB7IHBhcmFtczogeyBjb2xvcjogJyM0YTdiZmYnIH0gfVxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAnZW5kJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHdpZHRoOiAne3t2YWx1ZX19JScsXG4gICAgICAgICAgaGVpZ2h0OiAnMTJweCcsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAne3tjb2xvcn19JyxcbiAgICAgICAgfSksXG4gICAgICAgIHsgcGFyYW1zOiB7IGNvbG9yOiAnIzRhN2JmZicsIHZhbHVlOiAzMCB9IH1cbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdzdGFydCA9PiBlbmQnLCBbYW5pbWF0ZSgnMXMnKV0pLFxuICAgICAgdHJhbnNpdGlvbignc3RhcnQgPT4gZW5kJywgW2FuaW1hdGUoJzAuNXMnKV0pLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc1NxdWFyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHZhbHVlOiBOdW1iZXIgPSAzMDtcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICcjNGE3YmZmJztcbiAgQElucHV0KCkgY29sb3JCYWNrZ3JvdW5kOiBzdHJpbmcgPSAnIzExMTU0YSc7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdsaW5lYXInO1xuICBASW5wdXQoKSBhbmltYXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGlzT3BlbiA9IHRydWU7XG4gIFxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgIH0sIDUwMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWlsZVN0b25lUGVyY2VudGFnZSgpIHtcbiAgICBsZXQgdmFsdWVQZXJjZW50YWdlID0gMDtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgaWYgKE51bWJlcih2YWx1ZSkgPiAxMDApIHtcbiAgICAgIHZhbHVlUGVyY2VudGFnZSA9IDEwMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWVQZXJjZW50YWdlID0gTnVtYmVyKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlUGVyY2VudGFnZTtcbiAgfVxufVxuIiwiPGJvZHk+XG4gIDwhLS0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTElORUFSIFBST0dSRVNTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC0tPlxuXG4gIDwhLS0gQW5pbWF0aW9uIExpbmVhciBQcm9ncmVzcyBzcXVhcmUgLS0+XG4gIFxuICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCIgW25nU3R5bGVdPVwieyAnYmFja2dyb3VuZC1jb2xvcic6IGNvbG9yQmFja2dyb3VuZCB9XCIgKm5nSWY9XCJhbmltYXRlICYmIHR5cGU9PT0gJ2xpbmVhcidcIiA+XG4gICAgPGRpdlxuICAgICAgW0BpbmNyZWFzZVdpZHRoXT1cIntcbiAgICAgICAgdmFsdWU6IGlzT3BlbiA/ICdzdGFydCcgOiAnZW5kJyxcbiAgICAgICAgcGFyYW1zOiB7IGNvbG9yOiBjb2xvciwgdmFsdWU6IGdldE1pbGVTdG9uZVBlcmNlbnRhZ2UoKSB9XG4gICAgICB9XCJcbiAgICAgIGNsYXNzPVwicHJvZ3Jlc3MtY3VzdG9tXCJcbiAgICA+PC9kaXY+XG4gIDwvZGl2PlxuXG4gPCEtLSBTaW1wbGUgTGluZWFyIFByb2dyZXNzIHNxdWFyZSAtLT5cblxuIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb2xvckJhY2tncm91bmR9XCIgKm5nSWY9XCIhYW5pbWF0ZSAmJiB0eXBlPT09ICdsaW5lYXInXCI+XG4gIDxkaXZcbiAgICBbbmdTdHlsZV09XCJ7IHdpZHRoOiBnZXRNaWxlU3RvbmVQZXJjZW50YWdlKCkgKyAnJScgICwgJ2JhY2tncm91bmQtY29sb3InOiBjb2xvciB9XCJcbiAgICBjbGFzcz1cInByb2dyZXNzLWN1c3RvbVwiXG4gID48L2Rpdj5cbjwvZGl2PlxuXG48L2JvZHk+XG4iXX0=