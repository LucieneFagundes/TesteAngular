import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Fagner";
  userData = {
    email: "jacaranda@gmail.com",
    role: "Admin"
  }
  title = 'curso-angular';
}
