
export default class PreloadScene extends Phaser.Scene {


    constructor() {
        super('PreloadScene');
    }

    preload() {
        // Add loading screen bars
        this.graphics = this.add.graphics();
        this.newGraphics = this.add.graphics();
        var progressBar = new Phaser.Geom.Rectangle(200, 200, 400, 50);
        var progressBarFill = new Phaser.Geom.Rectangle(205, 205, 290, 40);

        this.graphics.fillStyle(0xffffff, 1);
        this.graphics.fillRectShape(progressBar);

        this.newGraphics.fillStyle(0x3587e2, 1);
        this.newGraphics.fillRectShape(progressBarFill);

        var loadingText = this.add.text(250, 260, "Loading: ", { fontSize: '32px', fill: '#FFF' });


        this.load.on('progress', this.updateBar, { newGraphics: this.newGraphics, loadingText: loadingText });
        this.load.on('complete', this.complete, { scene: this.scene });

        // Any Assets you want to load in
        this.load.image('background', 'assets/Background.jpg');
        for (var i = 0; i < 30; i++) {
            this.load.image('background_' + i, 'assets/Background.jpg');
        }

        this.load.image('titleBackground', 'assets/WhiteBackground.jpeg');
        for (var i = 0; i < 30; i++) {
            this.load.image('whiteBackground_' + i, 'assets/WhiteBackground.jpeg');
        }
        
        this.load.image('gunPowerUp', 'assets/gunupgrade.png');
        this.load.image('shieldPowerUp', 'assets/forcefield.png');
        this.load.image('lifePowerUp', 'assets/life1.png');

        this.load.spritesheet("player", 'assets/PlayerSpriteSheet.png', {
            frameWidth: 42,
            frameHeight: 50
        });
    }

    create() {
        // Create all animations
        this.anims.create({
            key: "walk-right",
            frameRate: 7,
            frames: this.anims.generateFrameNumbers("player", {start: 0, end: 3}),
            repeat: -1
        });

        this.anims.create({
            key: "walk-left",
            frameRate: 7,
            frames: this.anims.generateFrameNumbers("player", { start: 4, end: 7}),
            repeat: 1
        });

        this.anims.create({
            key: "idle-right",
            frameRate: 7,
            frames: this.anims.generateFrameNumbers("player", { start: 8, end: 11}),
            repeat: -1
        });

        this.anims.create({
            key: "idle-left",
            frameRate: 7,
            frames: this.anims.generateFrameNumbers("player", { start: 12, end: 15}),
            repeat: -1
        });
    }

    updateBar(percentage) {
        if (this.newGraphics) {
            this.newGraphics.clear();
            this.newGraphics.fillStyle(0x3587e2, 1);
            this.newGraphics.fillRectShape(new Phaser.Geom.Rectangle(205, 205, percentage * 390, 40));
        }
        percentage = percentage * 100;
        this.loadingText.setText("Loading: " + percentage.toFixed(2) + "%");
        console.log("P:" + percentage);
    }

    complete() {
        console.log("COMPLETE!");
        this.scene.start("TitleScene");
    }
}
