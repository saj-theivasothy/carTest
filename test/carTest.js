const chai = require('chai');
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js');

describe('#shouldBuyCar()', function() {

  it('should return false if it\'s a hatchback', function() {
    const car = {
      type: 'hatchback'
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it('should return true if it\'s color is pink', function() {
    const car = {
      color: 'pink'
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it('should return false when there are no details about the car', function() {
    const car = {};

    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it('should return false when the car is a hatchback and pink', function() {
    const car = {
      type: 'hatchback',
      color: 'pink'
    };

    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it('should return true when the car has 6 litres/100km and is $5,000', function() {
    const car = {
      litresPer100km: 6,
      price: 5000
    };
    
    const shouldBuy = shouldBuyCar(car);

    assert.isTrue(shouldBuy);
  });

  it('should return true when the car has 11 litres/100km and is $5,000', function() {
    const car = {
      litresPer100km: 11,
      price: 5000
    };

    const shouldBuy = shouldBuyCar(car);

    assert.isTrue(shouldBuy);
  });

  it('should return true when the car has 6 litres/100km and is under $5,000', function() {
    const car = {
      litresPer100km: 6,
      price: 4999
    };

    const shouldBuy = shouldBuyCar(car);

    assert.isTrue(shouldBuy);
  });

  it('should return true when the car has 11 litres/100km and is under $5,000', function() {
    const car = {
      litresPer100km: 11,
      price: 4999
    };

    const shouldBuy = shouldBuyCar(car);

    assert.isTrue(shouldBuy);
  });

  it('should return false when the car has 6 litres/100km and is over $5,000', function() {
    const car = {
      litresPer100km: 6,
      price: 5001
    };

    const shouldBuy = shouldBuyCar(car);

     assert.isFalse(shouldBuy);
  });

  it('should return false when the car has 11 litres/100km and is over $5,000', function() {
    const car = {
      litresPer100km: 11,
      price: 5001
    };

    const shouldBuy = shouldBuyCar(car);

    assert.isFalse(shouldBuy);
  });

  it('should return false when the car has 5 litres/100km and is $5,000 or under', function() {
    const car = {
      litresPer100km: 5,
      price: 4999
    };

    const shouldBuy = shouldBuyCar(car);

    assert.isFalse(shouldBuy);
  });

  it('should return false when the car has 12 litres/100km and is $5,000 or under', function() {
    const car = {
      litresPer100km: 12,
      price: 5000
    };

    const shouldBuy = shouldBuyCar(car);

    assert.isFalse(shouldBuy);
  });

  it('should return undefinded when there is no car', function() {

    const shouldBuy = shouldBuyCar();

    assert.isUndefined(shouldBuy);
  });
});