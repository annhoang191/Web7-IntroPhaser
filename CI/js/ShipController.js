class ShipController{
  constructor(x, y, spriteName, configs){
    this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
    this.configs = configs;
    Nakama.game.physics.arcade.enable(this.sprite);
    this.timeSinceLastFire = 0;
    this.sprite.anchor = new Phaser.Point(0.5 , 0.5);
    this.sprite.body.collideWorldBounds=true;
  }
  fireAmmo(){
     var bullet = new BulletController(this.sprite.position.x, this.sprite.position.y, 'BulletType1Upgraded.png');
  }
  update(){
    if(Nakama.keyboard.isDown(this.configs.up)){
        this.sprite.body.velocity.y=-Nakama.configs.PLAYER_SPEED;
    }
    else if(Nakama.keyboard.isDown(this.configs.down)){
        this.sprite.body.velocity.y=Nakama.configs.PLAYER_SPEED;
    }
    else{
      this.sprite.body.velocity.y=0;
    }
    if(Nakama.keyboard.isDown(this.configs.left)){
          this.sprite.body.velocity.x=-Nakama.configs.PLAYER_SPEED;
    }
    else if(Nakama.keyboard.isDown(this.configs.right)){
          this.sprite.body.velocity.x=Nakama.configs.PLAYER_SPEED;
    }
    else{
      this.sprite.body.velocity.x=0;
    }

    //throtting
    this.timeSinceLastFire += Nakama.game.time.physicsElapsed;
    if(Nakama.keyboard.isDown(this.configs.fire)
      && this.timeSinceLastFire > this.configs.cooldown){
      this.fireAmmo();
      this.timeSinceLastFire=0;
    }
  }
}
