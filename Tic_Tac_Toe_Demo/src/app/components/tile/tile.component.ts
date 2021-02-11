import { Component, OnInit } from '@angular/core';
import { Input,Output, EventEmitter } from '@angular/core';
import { Tile } from '../../models/tile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() tile:Tile;
  @Output() tileClicked: EventEmitter<Tile> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onTileClicked(){
    this.tileClicked.emit(this.tile);
  }

  getClasses(){
    return {
      o: this.tile.player==='O',
      x: this.tile.player==='X'
    };
  }

}
