const SCREEN_WIDTH = 390;
const SCREEN_HEIGHT = 844;

class StartScene extends Phaser.Scene {
  create() {
    const centerX = SCREEN_WIDTH / 2;

    this.add.text(centerX, 210, '100만 원으로\n세계여행하기', {
      color: '#111111',
      fontFamily: 'sans-serif',
      fontSize: '36px',
      align: 'center',
      lineSpacing: 12,
    }).setOrigin(0.5);

    this.add.text(centerX, 360, '시작 예산', {
      color: '#111111',
      fontFamily: 'sans-serif',
      fontSize: '20px',
    }).setOrigin(0.5);

    this.add.text(centerX, 405, '1,000,000원', {
      color: '#111111',
      fontFamily: 'sans-serif',
      fontSize: '40px',
    }).setOrigin(0.5);

    const button = this.add.rectangle(centerX, 560, 240, 64, 0x111111)
      .setInteractive({ useHandCursor: true });

    this.add.text(centerX, 560, '게임 시작', {
      color: '#ffffff',
      fontFamily: 'sans-serif',
      fontSize: '24px',
    }).setOrigin(0.5);

    const message = this.add.text(centerX, 660, '여행을 시작합니다', {
      color: '#111111',
      fontFamily: 'sans-serif',
      fontSize: '22px',
    }).setOrigin(0.5).setVisible(false);

    button.on('pointerdown', () => message.setVisible(true));
  }
}

new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'game',
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  backgroundColor: '#ffffff',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: StartScene,
});
