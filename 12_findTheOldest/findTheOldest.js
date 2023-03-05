const findTheOldest = function(array) {
  const currentDate = new Date().getFullYear();
  const oldest = array.sort(function (a, b) {
    let lastGuy;
    let nextGuy;
    typeof a.yearOfDeath == "number" ? lastGuy = (a.yearOfDeath - a.yearOfBirth) : lastGuy = (currentDate - a.yearOfBirth);
    typeof b.yearOfDeath == "number" ? nextGuy = (b.yearOfDeath - b.yearOfBirth) : nextGuy = (currentDate - b.yearOfBirth);
    return lastGuy > nextGuy ? -1 : 1;
  })
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
