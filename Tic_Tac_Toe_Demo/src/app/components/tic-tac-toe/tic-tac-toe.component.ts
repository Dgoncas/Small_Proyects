import { Component, OnInit } from '@angular/core';
import { Tile } from '../../models/tile';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {

  tiles: Array<Tile>;
  currentPlayer:string = "X";

  movements: number = 9;
  winner: string = 'NO ONE';

  winnerComb: Array<Array<number>> = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ];

  constructor() { }

  ngOnInit(): void {
    this.initTiles();
  }

  initTiles(){
    let id;
    this.tiles = [];
    for(id=0; id<9; id++){
        this.tiles.push({player:'',id:id});
    }
  }

  restart(){
    this.initTiles();
    this.movements = 9;
    this.winner='NO ONE';
  }

  onTileClicked(tile:Tile){
    if(this.movements>0){
      this.movements--;
      tile.player = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X'? 'O':'X';

      for(let comb of this.winnerComb){
        if(this.tiles[comb[0]].player!='' && this.tiles[comb[0]].player === this.tiles[comb[1]].player && this.tiles[comb[1]].player  === this.tiles[comb[2]].player){
          this.winner=this.tiles[comb[0]].player;
          this.movements=0;
        }
      }
    }
  }

  getMessageClasses(){
    return {
      finished: this.movements==0
    };
  }

}
