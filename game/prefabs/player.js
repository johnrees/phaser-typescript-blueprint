"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(game, x, y) {
        _super.call(this, game, x, y, 'dude', 0);
        game.physics.arcade.enableBody(this);
        game.add.existing(this);
        this.anchor.set(0.5, 0.5);
        this.animations.add('left', [0, 1, 2, 3], 10, true);
        this.animations.add('right', [5, 6, 7, 8], 10, true);
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.wasd = {
            up: this.game.input.keyboard.addKey(Phaser.Keyboard.W),
            left: this.game.input.keyboard.addKey(Phaser.Keyboard.A),
            down: this.game.input.keyboard.addKey(Phaser.Keyboard.S),
            right: this.game.input.keyboard.addKey(Phaser.Keyboard.D)
        };
    }
    Player.prototype.update = function () {
        if (this.cursors.left.isDown || this.wasd.left.isDown) {
            this.body.velocity.x = -150;
            this.animations.play('left');
        }
        else if (this.cursors.right.isDown || this.wasd.right.isDown) {
            this.body.velocity.x = 150;
            this.animations.play('right');
        }
        else {
            this.body.velocity.x = 0;
            this.animations.stop();
            this.frame = 4;
        }
    };
    return Player;
}(Phaser.Sprite));
exports.Player = Player;
