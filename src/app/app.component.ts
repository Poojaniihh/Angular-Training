import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
}) //decorator

//decorator design pattern - structural design patterns

export class AppComponent {
  title = 'my-first-angular-app';
}
