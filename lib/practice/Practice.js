function Practice() {};

Practice.prototype.add = function(a, b) {
  if(typeof(a) !== 'number' || typeof(b) !== "number")
    throw new Error('This function accepts integers only.')
  return Number(a + b);
}

module.exports = Practice;