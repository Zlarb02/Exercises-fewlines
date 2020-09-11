const star = { spectralClass: "M" };

const planet = {
  mass: 1.02,
  radius: 1.12,
  rotationStability: true,
  habitalZone: false,
};

function canHabitateLife(star, planet) {
  // Code the function here.

  let canIHabitateLife = false;
  if ((star.spectralClass === "K" || star.spectralClass === "M") && (planet.radius === 1 && planet.mass === 1) && (planet.mass < 3) && (planet.habitalZone) && (planet.rotationStability) || (planet.mass < 0.5 && planet.radius > 1))  { 
    canIHabitateLife = true;
  } else {
    canIHabitateLife = false;
  }
  return canIHabitateLife ;
  

}

// Do not remove last lines, it is for tests
module.exports = canHabitateLife;
