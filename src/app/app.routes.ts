import { Routes } from '@angular/router';
import { ComponentePruebaComponent } from './componente-prueba/componente-prueba.component';
import { DragonBallComponent } from './dragon-ball/dragon-ball.component';

export const routes: Routes = [{
    path : '',
    component: ComponentePruebaComponent
}, {
    path: 'dragonball',
    component: DragonBallComponent
}];
