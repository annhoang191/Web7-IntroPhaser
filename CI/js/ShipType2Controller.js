class ShipType2Controller extends ShipController{
  constructor(x, y, configs){
    configs.cooldown  = 0.5;
    configs.speed     = 400;
    super(x, y, 'Spaceship2-Player.png', configs);
  }
  createBullet(direction){
    new BulletType2Controller(
      this.sprite.position.x,
      this.sprite.position.y,
      {
          direction: direction
      }
    );
  }
  fireAmmo(){
     this.createBullet(new Phaser.Point(0, -1));
     this.createBullet(new Phaser.Point(1, -2));
     this.createBullet(new Phaser.Point(-1, -2));
   }
  }
