class BulletType1Controller extends BulletController{
  constructor(x, y, configs){
    configs.bulletSpeed = 1500;
    super(x, y, 'BulletType1.png', configs);
  }
}
