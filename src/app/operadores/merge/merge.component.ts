import { Component, OnInit } from "@angular/core";
import { interval, merge, race, concat, combineLatest, forkJoin, zip, of } from "rxjs";
import { take, map } from "rxjs/operators";

@Component({
  selector: "app-merge",
  templateUrl: "./merge.component.html",
  styleUrls: ["./merge.component.scss"]
})
export class MergeComponent implements OnInit {
  values1: any[] = [];
  values2: any[] = [];
  values3: any[] = [];
  mergedValues: any[] = [];
  raceValues: any[] = [];
  concatValues: any[] = [];
  combineLatestValues: any[] = [];
  joinForkValues: any[] = [];
  zipValues: any[] = [];

  constructor() {}
  
  ngOnInit() {
    const timer1 = interval(1000).pipe(take(10), map(x => "1-" + x));
    const timer2 = interval(2000).pipe(take(6), map(x => "2-" + x));
    const timer3 = interval(500).pipe(take(10), map(x => "3-" + x));
    const concurrent = 3; // the argument

    const merged = merge(timer1, timer2, timer3, concurrent);
    const raced = race(timer1, timer2, timer3);
    const concated = concat(timer1, timer2, timer3);
    const combineLatested = combineLatest(timer3, timer1, timer2);
    const joinForked = forkJoin(timer1, timer2, timer3);
    const ziped = zip(timer1, timer2, timer3).pipe(map(([lista1, lista2, lista3]) => ({ lista1, lista2, lista3 })));

    timer1.subscribe(a => {
      this.values1.push(a);
      console.log(a);
    });

    timer2.subscribe(a => {
      this.values2.push(a);
      console.log(a);
    });

    timer3.subscribe(a => {
      this.values3.push(a);
      console.log(a);
    });

    merged.subscribe(a => {
      this.mergedValues.push(a);
      console.log('merged: ', a);
    });    

    raced.subscribe(a => {
      this.raceValues.push(a);
      console.log('raced: ', a);
    });    

    concated.subscribe(a => {
      this.concatValues.push(a);
      console.log('concated: ', a);
    });    

    combineLatested.subscribe(a => {
      this.combineLatestValues.push(a);
      console.log('combineLatested: ', a, Array.isArray(a));
    });    

    joinForked.subscribe(a => {
      this.joinForkValues.push(a);
      console.log('forkJoin: ', a, Array.isArray(a));
    });    

    ziped.subscribe(a => {
      this.zipValues.push(a);
      console.log('zip: ', a);
    });    


  }


}
