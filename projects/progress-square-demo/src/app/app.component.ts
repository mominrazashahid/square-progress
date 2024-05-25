import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressSquareComponent } from 'ng-progress-square';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgressSquareComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}
