class ShipType1Controller extends ShipController{
  constructor(x, y, configs){
    super(x, y, `Spaceship1${configs.spriteSuffix}.png`, Object.assign(
      configs, {
        cooldown : 0.3,
        speed    : 500
      }
    ));
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
     this.createBullet(new Phaser.Point(1, -5));
     this.createBullet(new Phaser.Point(-1, -5));
     this.createBullet(new Phaser.Point(1, -2));
     this.createBullet(new Phaser.Point(-1, -2));
   }
  }
