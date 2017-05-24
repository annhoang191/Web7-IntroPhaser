class ShipController{
  constructor(x, y, spriteName, configs){
    this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
    this.configs = configs;
  }
  fireAmmo(){
     let bullet = new BulletController(this.sprite.x, this.sprite.y, 'BulletType1Upgraded.png');
     bullet.sprite.position.y -= bullet.sprite.height;
     bullet.sprite.position.x += (this.sprite.width - bullet.sprite.width)/2;
  }
  update(){
    if(Nakama.keyboard.isDown(this.configs.up)){
      this.sprite.position.y=Math.max(this.sprite.position.y-Nakama.configs.PLAYER_SPEED,0);
    }
    else if(Nakama.keyboard.isDown(this.configs.down)){
      this.sprite.position.y=Math.min(Nakama.game.height-78, this.sprite.position.y+Nakama.configs.PLAYER_SPEED);
    }
    else if(Nakama.keyboard.isDown(this.configs.left)){
      this.sprite.position.x=Math.max(this.sprite.position.x-Nakama.configs.PLAYER_SPEED,0);
    }
    else if(Nakama.keyboard.isDown(this.configs.right)){
      this.sprite.position.x=Math.min(Nakama.game.width-78, this.sprite.position.x+Nakama.configs.PLAYER_SPEED);
    }
    else if(Nakama.keyboard.isDown(this.configs.fire)){
      this.fireAmmo();
    }
  }
}
