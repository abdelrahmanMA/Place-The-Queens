import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  n: number;
  board: any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.n = parseInt(params['n']);
      this.fillBoard();
    });
  }

  private fillBoard(){
    this.board = Array(this.n).fill(null).map((_, i) => Array(this.n).fill(false));
  }

  letter(i: number): string {
    return String.fromCharCode(65 + (i % 26)) + (this.n > 26 ? Math.floor(i / 26).toString() : '');
  }

  cellClicked(i: number, j: number) {
    this.board[i][j] = !this.board[i][j];
  }

  private verify_board() : boolean{
    let rows = new Set();
    let columns = new Set();
    let diagonal = []
    for(let i= 0; i < this.n; i++){
      for(let j= 0; j < this.n; j++){
        if(this.board[i][j]){
          rows.add(i);
          columns.add(j);
          diagonal.push([i,j]);
        }
      }
    }
    if (rows.size != this.n || columns.size != this.n || diagonal.length != this.n){
      return false;
    }
    for(let i= 0; i < diagonal.length; i++){
      let x = diagonal[i];
      for(let j = i + 1; j < diagonal.length; j++){
        let y = diagonal[j];
        if(Math.abs(y[0] - x[0]) == Math.abs(y[1] - x[1])){
          return false;
        }
      }
    }
    return true;
  }

  verify(yes: string = "Correct!", no: string = "Sorry, Try Again"){
    alert(this.verify_board()? yes : no);
  }
  private solvableN(): boolean{
    let nonSolvable = new Set([0, 2, 3, NaN]);
    if(nonSolvable.has(this.n)){
      return false;
    }
    return true;
  }
  solve(){
    if(!this.solvableN()){
      alert("Unfortunately it's not solvable");
      return 0;
    }
    let evens = [];
    let odds = [];
    for(let i = 1; i <= this.n; i++){
      if(i % 2 == 0){
        evens.push(i)
      }
      else{
        odds.push(i)
      }
    }
    if(this.n % 6 == 2){
      odds[0] = 3;
      odds[1] = 1;
      odds.splice(2, 1);
      odds.push(5);
    }
    else if(this.n % 6 == 3){
      evens.splice(0, 1);
      evens.push(2)
      odds.splice(0, 2);
      odds.push(1);
      odds.push(3);
    }
    let numbers = evens.concat(odds)[Symbol.iterator]();
    this.fillBoard();
    for(let i = 0; i < this.n; i++){
      this.board[i][numbers.next().value - 1] = true
    }
    window.setTimeout(() => this.verify("Solved!", "Something wen't wrong cantact the administrator"), 300);
  }

  solvable(){
    alert(this.solvableN() ? "This is actually solvable": "Unfortunately it's not solvable");
  }

  reset(){
    this.fillBoard();
  }
}
