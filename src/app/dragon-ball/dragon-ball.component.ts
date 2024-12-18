import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonBallService } from './service/dragon-ball.service';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-dragon-ball',
  imports: [MatCardModule, CommonModule],
  templateUrl: './dragon-ball.component.html',
  styleUrl: './dragon-ball.component.css'
})
export class DragonBallComponent implements OnInit {

  DG_Characters: any =[]

  constructor(private DragonService:DragonBallService){}

  ngOnInit(): void {
    this.getInformation()
    
  }

  getInformation(){
    this.DragonService.getCharacters(1,100).subscribe((data: any) => this.DG_Characters = data.items);
  }

}
