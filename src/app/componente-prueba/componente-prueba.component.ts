import { Component, OnDestroy, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CatsService } from './service/cats.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente-prueba',
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './componente-prueba.component.html',
  styleUrl: './componente-prueba.component.css',
})
export class ComponentePruebaComponent implements OnInit, OnDestroy {

  title: any = 'Titulo';
  catInfo: any;
  loader: boolean = true;

  constructor(private catService: CatsService){}

  ngOnInit(): void {
    console.log('Componente iniciado');
    this.getRandomCat();
  }

  ngOnDestroy(): void {
    console.log('Componente Destruido');
  }

  getRandomCat(){
    this.loader = true;
    this.catService.getRandomCat().subscribe((response: any) => {
      console.log('[CAT] Loader: ', this.loader);
      console.log('[CAT] Respuesta: ',response);
      this.catInfo = response;
      setTimeout(() => {
        this.loader = false;
      }, 2000);
    }, (error: any) => {
      console.error('[CAT] Error: ', error);
    });
  }

}
