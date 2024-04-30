import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {answer} from '@app/shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  answer = answer;
}
