class BulletType2Controller extends BulletController{
  constructor(x, y, configs){
    super(x, y, 'BulletType2.png',  Object.assign(configs, {
      speed   : 700,
      turnRate: 180
    }));
  }
  update(){
      // TODO choose target and chase
  }
}
