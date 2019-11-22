import { Component, OnInit } from '@angular/core';
import { ɵMetadataOverrider } from '@angular/core/testing';
import { Observable, interval} from 'rxjs';
import { take, combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit  {
  title = 'Estudo de RxJS';

  ngOnInit() {
  }

}
