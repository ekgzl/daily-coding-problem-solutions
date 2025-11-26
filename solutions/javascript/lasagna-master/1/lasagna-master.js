/// <reference path="./global.d.ts" />

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time) {
  if (time === 0) return "Lasagna is done.";
  else if (time !== undefined) return "Not done, please wait.";
  else return "You forgot to set the timer.";
}

export function preparationTime(layers, num = 2) {
  return layers.length * num;
}

export function quantities(array) {
  let other = 0;
  let other2 = array.reduce((prev, now) => {
    if (now === "noodles") prev += 50;
    else if (now === "sauce") other += 0.2;
    return prev;
  }, 0);
  return {
    noodles: other2,
    sauce: other,
  };
}

export function addSecretIngredient(friend, my) {
  my.push(friend[friend.length - 1]);
}

export function scaleRecipe(recipe, a) {
  let fakeObj = {};
  for (let obj in recipe) {
    fakeObj[obj] = recipe[obj] * a/2;
  }
  return fakeObj;
}
