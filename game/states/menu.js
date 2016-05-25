"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        _super.apply(this, arguments);
    }
    Menu.prototype.create = function () {
        var fontStyle = {
            font: '18px VT323',
            fill: '#7edcfc'
        };
        this.text = this.add.text(this.world.centerX, 50, 'MAIN MENU', fontStyle);
        this.text.anchor.setTo(0.5, 0.5);
    };
    return Menu;
}(Phaser.State));
exports.Menu = Menu;
