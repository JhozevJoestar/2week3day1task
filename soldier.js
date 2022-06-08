const soldier = {
    name: 'Рэмбо',
    health: 10,
    gun: {
      gunName: 'АК-47',
      bullets: 30,
    },
    bulletsHorn: 3,
  
    shoot: function () {
        if (this.gun.bullets > 0){
            this.gun.bullets - 1;
            console.log(бах-бах)
        } else {
            return 'Обойма пуста. Перезарядитесь.'
        }
    },
    reload: function () {
        if (this.bulletsHorn > 0){
            this.bulletsHorn -= 1;
            this.gun.bullets = 30
            return "Перезарядка..."
          } else {
            return "Не осталось припасов"
          }
    },
    wound: function () {},
  };