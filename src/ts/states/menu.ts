export class Menu extends Phaser.State {
  text: Phaser.Text;

  create() {
    let fontStyle = {
      font: '18px VT323',
      fill: '#7edcfc'
    };

    this.text = this.add.text(this.world.centerX, 50, 'MAIN MENU', fontStyle);
    this.text.anchor.setTo(0.5, 0.5);
  }
}
