class BulletType2Controller extends BulletController{
  constructor(x, y, configs){
    configs.bulletSpeed = 1500;
    super(x, y, 'BulletType2.png', configs);
  }
}
