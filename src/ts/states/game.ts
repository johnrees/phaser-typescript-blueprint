import { Player } from '../prefabs/player';

export class Game extends Phaser.State {

  player: Player;

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.player = new Player(this.game, this.world.centerX, this.world.centerY);
  }

}
