import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lista-simples',
  templateUrl: './lista-simples.component.html',
  styleUrls: ['./lista-simples.component.scss']
})
export class ListaSimplesComponent implements OnInit {

  @Input() list: any[];

  constructor() { }

  ngOnInit() {
  }

}
