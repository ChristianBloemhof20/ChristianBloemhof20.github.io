export default class BootScene extends Phaser.Scene {

    constructor() {
        super('BootScene');
    }

    preload() {
        this.load.image('logo', 'assets/Walk23.png');
    }

    create() {
        this.scene.start("PreloadScene");
    }
}