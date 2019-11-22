import { Component, OnInit } from '@angular/core';
import { interval, of, fromEvent } from 'rxjs';
import { take, map, buffer, bufferCount, bufferWhen } from 'rxjs/operators';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationComponent implements OnInit {
  values1: any[] = [];
  values2: any[] = [];

  values3: any[] = [];

  valuesWhen: any[] = [];
  valuesWhenOriginal: any[] = [];

  constructor() { }

  ngOnInit() {
    const quandoEsteEmitir = interval(501).pipe(take(10), map(a => " JP: " + a));
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


    //BUFFER WHEN - emite acada 0,5 segundo
    const emissor = interval(499).pipe(take(10), map(x => "João Pedro -" + x));
    //fechar o buffer a cada 1 segundo
    const closer = interval(1000);
    const bufferedWhen = emissor.pipe(bufferWhen(() => closer));
  
    emissor.subscribe(a => {
      console.log('buffedWhen Orginal: ', a);
      this.valuesWhenOriginal.push(a);
     });

    bufferedWhen.subscribe(a => {
       console.log('buffedWhen: ', a);
       this.valuesWhen.push(a);
    });


  }


}
