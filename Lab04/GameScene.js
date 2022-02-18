var player;

export default class GameScene extends Phaser.Scene {

    constructor() {
        super('GameScene');
    }

    init() {
        this.score = 0;
        this.lives = 3;
        this.speed = 1.5;
    }

    preload() {
        // Preload the images we are going to use in our game
        this.load.image('background', 'assets/Background.jpg');
        this.load.image('player', 'assets/Walk00.png');
    }
    
    create() {
        // Add background
        var bg = this.add.sprite(0, 0, 'background');
        bg.setOrigin(0, 0);

        // Add the player
        player = this.physics.add.sprite(300, 300, player);
        player.setCollideWorldBounds(true);
        player.play('idle-left');

        // Add controls for the player
        this.input.keyboard.on('keydown_W', this.moveUp, this);
        this.input.keyboard.on('keydown_A', this.moveLeft, this);
        this.input.keyboard.on('keydown_S', this.moveDown, this);
        this.input.keyboard.on('keydown_D', this.moveRight, this);

        // Add controls so the player turns idle again
        this.input.keyboard.on('keyup_W', this.stopUp, this);
        this.input.keyboard.on('keyup_A', this.stopLeft, this);
        this.input.keyboard.on('keyup_S', this.stopDown, this);
        this.input.keyboard.on('keyup_D', this.stopRight, this);
    }

    moveUp() {
        player.setVelocityY(-100);
        if (player.body.velocity.x > 0) player.play('walk-left', true);
        else player.play('walk-right', true);
    }

    moveDown() {
        player.setVelocityY(100);
        if (player.body.velocity.x > 0) player.play('walk-left', true);
        else player.play('walk-right', true);
    }

    moveLeft() {
        player.setVelocityX(-100);
        player.play('walk-left', true);
    }

    moveRight() {
        player.setVelocityX(100);
        player.play('walk-right', true);
    }

    stopUp() {
        player.setVelocityY(0);

        // If they're still moving in an x direction
        if (player.body.velocity.x != 0) {
            if (player.body.velocity.x > 0) player.play('walk-left', true);
            else player.play('walk-right', true);
        }

        // If they've stopped
        else {
            if (player.body.velocity.x > 0) player.play('idle-left', true);
            else player.play('idle-right', true);
        }
    }

    stopDown() {
        player.setVelocityY(0);

        // If they're still moving in an x direction
        if (player.body.velocity.x != 0) {
            if (player.body.velocity.x > 0) player.play('walk-left', true);
            else player.play('walk-right', true);
        }

        // If they've stopped
        else {
            if (player.body.velocity.x > 0) player.play('idle-left', true);
            else player.play('idle-right', true);
        }
    }

    stopLeft() {
        player.setVelocityX(0);
        
        // Simpler than the up-down stop methods because we know which direction to face
        if (player.body.velocity.y == 0) player.play('idle-left', true);
    }

    stopRight() {
        player.setVelocityX(0);

        // Simpler than the up-down stop methods because we know which direction to face
        if (player.body.velocity.y == 0) player.play('idle-right', true);
    }
}