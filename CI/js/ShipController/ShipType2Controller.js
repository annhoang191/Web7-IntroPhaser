class ShipType2Controller extends ShipController{
  constructor(x, y, configs){
    super(x, y, `Spaceship2${configs.spriteSuffix}.png`, Object.assign(
      configs, {
        cooldown : 0.5,
        speed    : 300
      }
    ));
    this.isShootingLeft = true;
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
     this.createBullet(new Phaser.Point(this.isShootingLeft ? -1 : 1, 0));
     this.isShootingLeft = !this.isShootingLeft;
   }
  }
