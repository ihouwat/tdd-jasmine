function Practice() {};

Practice.prototype.add = function(a, b) {
  if(typeof(a) !== 'number' || typeof(b) !== "number")
    throw new Error('This function accepts arguments of type number only.')
  return Number(a + b);
}

module.exports = Practice;