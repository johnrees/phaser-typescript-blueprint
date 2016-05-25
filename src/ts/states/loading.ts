export class Loading extends Phaser.State {

  loadingText: Phaser.Text;
  ready: boolean = false;

  preload() {
    // this.load.image('loadingBarBg', 'assets/images/loading-bar-bg.png');
    // this.load.image('loadingBar', 'assets/images/loading-bar.png');
  }

  create() {
    let fontStyle = {
      font: '18px VT323',
      fill: '#7edcfc'
    };

    // let loadingBarBg = this.game.add.sprite(this.game.world.centerX,
    //   this.game.world.centerY,
    //   'loadingBarBg');
    // loadingBarBg.tint = 0x7edcfc; // Same blue as text
    // loadingBarBg.anchor.setTo(0.5);

    // let loadingBar = this.game.add.sprite(this.game.world.centerX - 175,
    //   this.game.world.centerY - 16,
    //   'loadingBar');
    // loadingBar.tint = 0xdcfc7e; // A contrasting green

    // this.load.setPreloadSprite(loadingBar);

    this.loadingText = this.add.text(this.world.centerX,
      this.world.centerY,'Loading...', fontStyle);
    this.loadingText.anchor.setTo(0.5);

    // this.game.load.onFileComplete.add(this.fileComplete, this);
    // // Load game assets here
    // this.game.load.start(); // Required so the onFileComplete listener is called
    this.ready = true;
  }

  fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
    this.loadingText.setText('Loading... ' + progress + '%');
    if (progress === 100) {
      this.ready = true;
    }
  }

  update() {
    if (this.ready) {
      this.game.state.start('Menu');
    }
  }

}
