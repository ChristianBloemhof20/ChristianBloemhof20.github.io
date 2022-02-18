export default class InstructionScene extends Phaser.Scene {

    constructor() {
        super("InstructionScene");
    }

    create() {
        var bg = this.add.sprite(0, 0, 'whiteBackground_1');
        bg.setOrigin(0, 0);

        var storyText = this.add.text(100, 100, "Protect your dog from the horrors that are happening outside.");
        storyText.setColor("black");

        var objectiveText = this.add.text(100, 200, "Survive as long as possible and achieve the highest score! Zombies will attack both you and your dog, so prioritize wisely.")
        objectiveText.setColor("black");

        var instructionText = this.add.text(100, 300, "Movement: wasd\nShooting: arrow keys");
        instructionText.setColor("black");

        var powerUpText = this.add.text(300, 400, "Power Up Compass");
        powerUpText.setColor("black");

        var gunIcon = this.add.sprite(300, 450, 'gunPowerUp');
        gunIcon.setScale(0.1);

        var shieldIcon = this.add.sprite(375, 450, 'shieldPowerUp');
        shieldIcon.setScale(0.1);

        var lifeIcon = this.add.sprite(450, 450, 'lifePowerUp');

        var startText = this.add.text(100, 500, "Good Luck!\nPress Enter to begin");
        startText.setColor("black");

        this.input.keyboard.on('keydown_ENTER', this.startGame, this);
    }

    startGame() {
        console.log("Starting game");
        this.scene.start('GameScene');
    }
}