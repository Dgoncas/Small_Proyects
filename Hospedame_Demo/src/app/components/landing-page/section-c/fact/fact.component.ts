import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.scss']
})

export class FactComponent implements OnInit {

  @Input() title:string;
  @Input() text:string;
  @Input() bottom:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  bottomClass(){
    return {
      noBorderBottom: !this.bottom
    };
  }

}
