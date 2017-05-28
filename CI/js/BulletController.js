class BulletController{
  constructor(x, y, spriteName, configs){
    this.sprite = Nakama.bulletGroup.create(x,y,'assets', spriteName);
    this.configs = configs;
    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;
    this.sprite.body.velocity = configs.direction.setMagnitude(this.configs.bulletSpeed) ;
    this.sprite.anchor = new Phaser.Point(0 , 1);

    this.sprite.angle = Phaser.Math.radToDeg(Phaser.Math.angleBetween(
      0, 0, configs.direction.x, configs.direction.y
    )) + 90;
  }
}
