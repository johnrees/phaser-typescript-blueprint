"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Loading = (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        _super.apply(this, arguments);
        this.ready = false;
    }
    Loading.prototype.preload = function () {
    };
    Loading.prototype.create = function () {
        var fontStyle = {
            font: '18px VT323',
            fill: '#7edcfc'
        };
        this.loadingText = this.add.text(this.world.centerX, this.world.centerY, 'Loading...', fontStyle);
        this.loadingText.anchor.setTo(0.5);
        this.ready = true;
    };
    Loading.prototype.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
        this.loadingText.setText('Loading... ' + progress + '%');
        if (progress === 100) {
            this.ready = true;
        }
    };
    Loading.prototype.update = function () {
        if (this.ready) {
            this.game.state.start('Menu');
        }
    };
    return Loading;
}(Phaser.State));
exports.Loading = Loading;
