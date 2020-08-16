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

  changed(number: any){
    if (number.value >= 1) {
      this.n = number.value;
    }
  }

  create(){
    this.router.navigate(['/game', {n: Math.floor(this.n)}]);
  }
}
