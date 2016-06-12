class Calculator {

  static checkNumbers(num1, num2) {
    return typeof num1 === 'number' && typeof num2 === 'number';
  }

  static add(num1, num2) {
    if(!Calculator.checkNumbers(num1, num2)) throw new Error('dafuq ?');
    return num1 + num2;
  }

  static substract(num1, num2) {
    if(!Calculator.checkNumbers(num1, num2)) throw new Error('dafuq ?');
    return num1 - num2;
  }

  static multiply(num1, num2) {
    if(!Calculator.checkNumbers(num1, num2)) throw new Error('dafuq ?');
    return num1 * num2;
  }

  static divide(num1, num2) {
    if(!Calculator.checkNumbers(num1, num2)) throw new Error('dafuq ?');
    if(num2 === 0) throw new Error('dafuq bro ?');
    else return num1 / num2;
  }

  // @todo
  static verboseAdd(num1, num2) {
    return null;
  }

}

module.exports = Calculator;
