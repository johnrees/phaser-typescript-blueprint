export class Boot extends Phaser.State {

  fontsLoaded: boolean = false;

  init() {
    window['WebFontConfig'] = {
      active: () => this.fontsLoaded = true,
      google: { families: ['VT323'] }
    };
  }

  preload() {
    this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js');
    // this.load.image('loadingBarBg', 'assets/images/loading-bar-bg.png');
    // this.load.image('loadingBar', 'assets/images/loading-bar.png');
  }

  create() {
    this.game.input.maxPointers = 1;
    this.game.antialias = false; // For pixel art
    // this.stage.disableVisibilityChange = true; // disable auto-pause on focus loss

    if (!this.game.device.desktop) {
      this.scale.forceOrientation(true, false); // Landscape
      //this.scale.forceOrientation(false, true); // Portrait
    }

    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; // Use max screen space
  }

  update() {
    if (this.fontsLoaded) {
      this.game.state.start('Loading');
    }
  }

}
