import { CommonModule } from '@angular/common';
import { Component, Input, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ProgressSquareComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3F1YXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3Byb2dyZXNzLXNxdWFyZS9zcmMvbGliL3Byb2dyZXNzLXNxdWFyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUcsS0FBSyxHQUFXLE1BQU0sZUFBZSxDQUFDOzs7QUFtQjNELE1BQU0sT0FBTyx1QkFBdUI7SUFqQnBDO1FBbUJXLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQUMxQixvQkFBZSxHQUFXLFNBQVMsQ0FBQztLQWdCOUM7SUFkQyxRQUFRO0lBRVIsQ0FBQztJQUVNLHNCQUFzQjtRQUMzQixJQUFJLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUN4QixlQUFlLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLENBQUM7YUFBTSxDQUFDO1lBQ04sZUFBZSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQzs4R0FuQlUsdUJBQXVCO2tHQUF2Qix1QkFBdUIsOEpBWnhCOzs7Ozs7Ozs7R0FTVCwrSkFYUyxZQUFZOzsyRkFjWCx1QkFBdUI7a0JBakJuQyxTQUFTOytCQUNFLG9CQUFvQixjQUNsQixJQUFJLFdBQ1AsQ0FBQyxZQUFZLENBQUMsWUFFYjs7Ozs7Ozs7O0dBU1Q7OEJBS1EsS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxlQUFlO3NCQUF2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgIElucHV0LCBPbkluaXQsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXByb2dyZXNzLXNxdWFyZScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBzdHlsZVVybHM6IFsnLi9zdHlsZXMvcHJvZ3Jlc3Mtc3F1YXJlLnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Ym9keT5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb2xvckJhY2tncm91bmR9XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBbbmdTdHlsZV09XCJ7IHdpZHRoOiBnZXRNaWxlU3RvbmVQZXJjZW50YWdlKCkgKyAnJScgICwgJ2JhY2tncm91bmQtY29sb3InOiBjb2xvciB9XCJcbiAgICAgICAgICBjbGFzcz1cInByb2dyZXNzLWN1c3RvbVwiXG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYm9keT5cbiAgYCxcbiAgc3R5bGVzOiBgYCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NTcXVhcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHZhbHVlOiBOdW1iZXIgPSAzMDtcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICcjNGE3YmZmJztcbiAgQElucHV0KCkgY29sb3JCYWNrZ3JvdW5kOiBzdHJpbmcgPSAnIzExMTU0YSc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgfVxuXG4gIHB1YmxpYyBnZXRNaWxlU3RvbmVQZXJjZW50YWdlKCkge1xuICAgIGxldCB2YWx1ZVBlcmNlbnRhZ2UgPSAwO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICBpZiAoTnVtYmVyKHZhbHVlKSA+IDEwMCkge1xuICAgICAgdmFsdWVQZXJjZW50YWdlID0gMTAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZVBlcmNlbnRhZ2UgPSBOdW1iZXIodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVQZXJjZW50YWdlO1xuICB9XG59XG4iXX0=