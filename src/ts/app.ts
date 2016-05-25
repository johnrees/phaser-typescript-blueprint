/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts"/>

import { Boot } from './states/boot';
import { Loading } from './states/loading';
import { Menu } from './states/menu';

export class App extends Phaser.Game {
  constructor() {
    super(160, 144, Phaser.CANVAS);
    this.state.add('Boot', Boot);
    this.state.add('Loading', Loading);
    this.state.add('Menu', Menu);

    this.state.start('Boot');
  }
}

let game = new App();
