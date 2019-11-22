import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { take, map, buffer, bufferCount } from 'rxjs/operators';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationComponent implements OnInit {
  values1: any[] = [];
  values2: any[] = [];

  values3: any[] = [];

  constructor() { }

  ngOnInit() {
    const quandoEsteEmitir = interval(501).pipe(take(10), map(a => " valor: " + a));
    //BUFFER
    const buffered = quandoEsteEmitir.pipe(buffer(quandoEsteEmitir));
    
    quandoEsteEmitir.subscribe(a => {
      console.log('normal', a);
      this.values1.push(a);
    });

    buffered.subscribe(a => {
      console.log('buffered', a);
      this.values2.push(a);
    });

    //BUFFER COUNT
    const bufferedCount = quandoEsteEmitir.pipe(bufferCount(3,2));
    
    bufferedCount.subscribe(a => {
      console.log('bufferedCount', a);
      this.values3.push(a);
    });

  }


}
