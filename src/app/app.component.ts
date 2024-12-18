import { Component } from '@angular/core';
import { ComponentePruebaComponent } from "./componente-prueba/componente-prueba.component";
import { DragonBallComponent } from "./dragon-ball/dragon-ball.component";

@Component({
  selector: 'app-root',
  imports: [ComponentePruebaComponent, DragonBallComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pruebas';
}
