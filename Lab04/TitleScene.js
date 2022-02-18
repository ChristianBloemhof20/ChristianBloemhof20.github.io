export default class TitleScene extends Phaser.Scene {

	constructor() {
		super("TitleScene");
	}

	preload() {

	}

	create() {
		 var bg = this.add.sprite(0,0,'whiteBackground_1');
         bg.setOrigin(0,0);
         
         var title = this.add.text(100, 100, "Zombie Killer");
         title.setFontSize(title.fontSize = 64);
         title.setOrigin(-0.1);
         title.setColor("black");

        var enterText = this.add.text(300, 200, "Press Enter to Begin");
        enterText.setColor("black");

        this.input.keyboard.on('keydown_ENTER', this.instructionButton, this);
	}

    instructionButton() {
        console.log("instructions ...");
        this.scene.start('InstructionScene');
    }
}