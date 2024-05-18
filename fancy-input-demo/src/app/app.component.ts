import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FancyInputComponent } from 'fancy-input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FancyInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fancy-input-demo';
}
