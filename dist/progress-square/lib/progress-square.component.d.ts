import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ProgressSquareComponent implements OnInit {
    value: Number;
    color: string;
    colorBackground: string;
    type: string;
    animate: boolean;
    isOpen: boolean;
    ngOnInit(): void;
    getMileStonePercentage(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressSquareComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressSquareComponent, "ng-progress-square", never, { "value": { "alias": "value"; "required": false; }; "color": { "alias": "color"; "required": false; }; "colorBackground": { "alias": "colorBackground"; "required": false; }; "type": { "alias": "type"; "required": false; }; "animate": { "alias": "animate"; "required": false; }; }, {}, never, never, true, never>;
}
