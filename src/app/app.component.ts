import { Component } from '@angular/core';
import { Tiles } from './model';
import { TilesData } from './source';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-demo';

  tiles: Tiles[] = [];

  constructor() {
      this.tiles.push(...TilesData);
  }
}
