class BulletType3Controller extends BulletController{
  constructor(x, y, configs){
    configs.bulletSpeed = 1000;
    super(x, y, 'BulletType3.png', configs);
  }
}
