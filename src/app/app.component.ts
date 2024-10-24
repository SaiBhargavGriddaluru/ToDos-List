import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from './welcome/welcome.component';
import { ListToDosComponent } from './list-to-dos/list-to-dos.component';
import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, WelcomeComponent, ListToDosComponent, MenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
}
