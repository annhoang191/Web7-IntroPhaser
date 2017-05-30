var Nakama = {};
Nakama.configs = {
  PLAYER_SPEED      :500,
  ENEMY_SPEED       :400,
  BACKGROUND_SPEED  :5,
  BULLET_SPEED      :1500,
  PLAYER_1_CONTROL  : {
    spriteSuffix    : '-Player',
    up              :   Phaser.Keyboard.UP,
    down            :   Phaser.Keyboard.DOWN,
    left            :   Phaser.Keyboard.LEFT,
    right           :   Phaser.Keyboard.RIGHT,
    fire            :   Phaser.Keyboard.SPACEBAR
  },
  PLAYER_2_CONTROL  : {
    spriteSuffix    : '-Partner',
    up              : Phaser.Keyboard.W,
    down            : Phaser.Keyboard.S,
    left            : Phaser.Keyboard.A,
    right           : Phaser.Keyboard.D,
    fire            : Phaser.Keyboard.F
  }
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
  Nakama.enemyGroup = Nakama.game.add.physicsGroup();
  Nakama.bulletGroup = Nakama.game.add.physicsGroup();
  Nakama.playerGroup = Nakama.game.add.physicsGroup();

  var ShipConstructors = [
    ShipType1Controller,
    ShipType2Controller,
    ShipType3Controller
  ];
  Nakama.players = [];

  var player1Constructor = getShipConstructor(1, ShipConstructors);
  Nakama.players.push(
    new player1Constructor(200, 700, Nakama.configs.PLAYER_1_CONTROL)
  );

  var player2Constructor = getShipConstructor(2, ShipConstructors);
  Nakama.players.push(
    new player2Constructor(440, 700, Nakama.configs.PLAYER_2_CONTROL)
  );

  Nakama.enemies = [];
  Nakama.enemies.push(new EnemyController(320, 300));
}


/*==================Update game state each frame==================*/
var update = function(){
  Nakama.background.tilePosition.y +=Nakama.configs.BACKGROUND_SPEED;

  for(player of Nakama.players){
    player.update();
  }
  for(enemy of Nakama.enemies){
    enemy.update();
  }

  Nakama.bulletGroup.forEachAlive(function(bullet){

  });
  Nakama.game.physics.arcade.overlap(
    Nakama.bulletGroup,
    Nakama.enemyGroup,
    onBulletHitEnemy
  );
}

/*================== before camera render (mostly for debug)==================*/
var render = function(){}

/*================== kill bullet which hit enemies==================*/
var onBulletHitEnemy = function(bullet, enemy){
  bullet.kill();
  enemy.damage(1);
}

var getShipConstructor = function(playerNumber, ShipConstructors){
  while(true) {
    var input = parseInt(prompt(`Please enter player ${playerNumber} ship type:`));

    if(!isNaN(input) && input > 0 && input <= ShipConstructors.length){
      return ShipConstructors[input-1];
    }
  }
}
