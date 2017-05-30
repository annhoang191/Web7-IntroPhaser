class EnemyController{
  constructor(x, y, configs){
    this.sprite = Nakama.enemyGroup.create(x, y, 'assets', 'EnemyType1.png');
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.health = 100;     //build in phaser
  }

  update(){
    this.sprite.position.x = Math.sin(Nakama.game.time.now/1000) * (320 - this.sprite.width/2) + 320;
  }
}
