import { Player } from '../prefabs/player';

export class Game extends Phaser.State {

  player: Player;

  create() {
    this.game.time.advancedTiming = true;
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.player = new Player(this.game, this.world.centerX, this.world.centerY);
  }

  render() {
    this.game.debug.text(this.game.time.fps.toString(), 10, 20, "#ffffff");
  }

}
