import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.sass']
})
export class GameSettingsComponent implements OnInit {

  n = 1;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  create(){
    this.router.navigate(['/game', {n: Math.floor(this.n)}]);
  }

  pressed(event: any, number: any){
    if (number.value != 0 && number.value <= 100) {
      this.n = Math.abs(number.value);
    }
    if(event.key == "Enter"){
      this.create();
    }
  }
}
