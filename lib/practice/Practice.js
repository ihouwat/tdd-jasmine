function Practice() {};

Practice.prototype.add = function(a, b) {
  if(typeof(a) !== 'number' || typeof(b) !== "number")
    throw new Error('This function accepts arguments of type number only.')
  return Number(a + b);
}

Practice.prototype.add5 = function(num) {
  return this.add(num, 5);
}

module.exports = Practice;