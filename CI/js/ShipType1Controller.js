class ShipType1Controller extends ShipController{
  constructor(x, y, configs){
    configs.cooldown  = 0.3;
    configs.speed     = 500;
    super(x, y, 'Spaceship1-Player.png', configs);      //base class
  }
  createBullet(direction){
    new BulletType1Controller(
      this.sprite.position.x,
      this.sprite.position.y,
      {
          direction: direction
      }
    );
  }
  fireAmmo(){
     this.createBullet(new Phaser.Point(0, -1));      //vector
     this.createBullet(new Phaser.Point(1, -10));
     this.createBullet(new Phaser.Point(-1, -10));
     this.createBullet(new Phaser.Point(1, -2));
     this.createBullet(new Phaser.Point(-1, -2));
   }
  }
