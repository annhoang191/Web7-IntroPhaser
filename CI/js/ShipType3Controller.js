class ShipType3Controller extends ShipController{
  constructor(x, y, configs){
    configs.cooldown  = 0.7;
    configs.speed     = 700;
    super(x, y, 'Spaceship3-Player.png', configs);      //base class
  }
  createBullet(direction){
    new BulletType3Controller(
      this.sprite.position.x,
      this.sprite.position.y,
      {
          direction: direction
      }
    );
  }
  fireAmmo(){
     this.createBullet(new Phaser.Point(0,-1));
     this.createBullet(new Phaser.Point(0, -3));
   }
  }
