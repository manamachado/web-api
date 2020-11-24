class Hero {
  constructor({ id, name, age, power }) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.power = power;
  }

  isValid() {
    const propertyNames = Object.getOwnPropertyNames(this);
    console.log('propertyNames', propertyNames);
  }
}

module.exports = Hero

const hero = new Hero({ id: 1, name: 'Chapolin', age: 100, power: 'Super Força' });
console.log('valid', hero.isValid());