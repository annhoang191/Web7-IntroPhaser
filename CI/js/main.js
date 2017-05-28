var Nakama = {};
Nakama.configs = {
  PLAYER_SPEED      :500,
  BACKGROUND_SPEED  :5,
  BULLET_SPEED      :1500
};

window.onload = function(){
  Nakama.game = new Phaser.Game(640,960,Phaser.AUTO,'',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    }, false, false
  );
}

/*==================preparations before game starts==================*/
var preload = function(){
  Nakama.game.scale.minWidth = 320;
  Nakama.game.scale.minHeight = 480;
  Nakama.game.scale.maxWidth = 640;
  Nakama.game.scale.maxHeight = 960;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Nakama.game.time.advancedTiming = true;

  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.image('background', 'Assets/Map1.png');
}

/*===============================initialize the game==================*/
var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard = Nakama.game.input.keyboard;

  Nakama.background = Nakama.game.add.tileSprite(0,0,640,960,'background');
  Nakama.bulletGroup = Nakama.game.add.physicsGroup();
  Nakama.playerGroup = Nakama.game.add.physicsGroup();

  var userInput = prompt("Enter the type of your spacecraft\ntype 1:\ntype 2:\ntype 3:");
  switch(userInput){
      case "":
      case "type 1":
          Nakama.player = new ShipType1Controller(150, 900, {
            up      :   Phaser.Keyboard.UP,
            down    :   Phaser.Keyboard.DOWN,
            left    :   Phaser.Keyboard.LEFT,
            right   :   Phaser.Keyboard.RIGHT,
            fire    :   Phaser.Keyboard.CONTROL
          });
          Nakama.partner = new ShipType1Controller(500,900, {
            up      : Phaser.Keyboard.W,
            down    : Phaser.Keyboard.S,
            left    : Phaser.Keyboard.A,
            right   : Phaser.Keyboard.D,
            fire    : Phaser.Keyboard.SPACEBAR
          });
        break;
      case "type 2":
          Nakama.player = new ShipType2Controller(150, 900, {
            up      :   Phaser.Keyboard.UP,
            down    :   Phaser.Keyboard.DOWN,
            left    :   Phaser.Keyboard.LEFT,
            right   :   Phaser.Keyboard.RIGHT,
            fire    :   Phaser.Keyboard.CONTROL,
          });
          Nakama.partner = new ShipType2Controller(500,900, {
            up      : Phaser.Keyboard.W,
            down    : Phaser.Keyboard.S,
            left    : Phaser.Keyboard.A,
            right   : Phaser.Keyboard.D,
            fire    : Phaser.Keyboard.SPACEBAR,
          });
        break;
      case "type 3":
        Nakama.player = new ShipType3Controller(150, 900, {
          up      :   Phaser.Keyboard.UP,
          down    :   Phaser.Keyboard.DOWN,
          left    :   Phaser.Keyboard.LEFT,
          right   :   Phaser.Keyboard.RIGHT,
          fire    :   Phaser.Keyboard.CONTROL,
        });
        Nakama.partner = new ShipType3Controller(500,900, {
          up      : Phaser.Keyboard.W,
          down    : Phaser.Keyboard.S,
          left    : Phaser.Keyboard.A,
          right   : Phaser.Keyboard.D,
          fire    : Phaser.Keyboard.SPACEBAR,
        });
          break;
      default:
        var text="Invalid Input!";
        Nakama.print=Nakama.game.add.text(170,480, '', {
          font: 'bold 40pt Arial',
          fill : 'white',
          stroke : 'black',
          strokeThickness : 4
        });
        Nakama.print.setText(text);
        break;
      }
}


/*==================Update game state each frame==================*/
var update = function(){
  Nakama.background.tilePosition.y +=Nakama.configs.BACKGROUND_SPEED;
  Nakama.game.physics.arcade.collide(Nakama.player, Nakama.partner);
  Nakama.player.update();
  Nakama.partner.update();
}

/*================== before camera render (mostly for debug)==================*/
var render = function(){}
