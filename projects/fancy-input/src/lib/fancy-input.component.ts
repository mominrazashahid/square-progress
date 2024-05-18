import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-fancy-input',
  standalone: true,
  imports: [],
  styleUrls: ['./styles/fancy-input.scss'],
  template: `
  <body>
    <div class="form-group">
        <label for="exampleInput">{{placeholder}}</label>
        <input type="text" id="exampleInput" class="form-control" placeholder="Enter text">
    </div>
</body>
  `,
  styles: ``
})
export class FancyInputComponent {
  @Input() placeholder: string = 'Enter text';

}
