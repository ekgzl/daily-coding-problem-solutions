/// <reference path="./global.d.ts" />
//

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  var cost;

  if (pizza === "Margherita") {
    cost = 7;
  } else if (pizza === "Caprese") {
    cost = 9;
  } else if (pizza === "Formaggio") {
    cost = 10;
  }

  function calculate(currentExtras) {
    if (currentExtras.length === 0) {
      return cost;
    }

    if (currentExtras[currentExtras.length - 1] === "ExtraToppings") {
      cost = cost + 2;
      currentExtras.pop();
    } else if (currentExtras[currentExtras.length - 1] === "ExtraSauce") {
      cost = cost + 1;
      currentExtras.pop();
    }
    calculate(currentExtras);
  }
  calculate(extras);
  return cost;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let cost = 0;

  for (let i = 0; i < pizzaOrders.length; i++) {
    const pizza = pizzaOrders[i].pizza;
    if (pizza === "Margherita") {
      cost += 7;
    } else if (pizza === "Caprese") {
      cost += 9;
    } else if (pizza === "Formaggio") {
      cost += 10;
    }
    if (pizzaOrders[i].extras.length > 0) {
      const extras = pizzaOrders[i].extras;
      for (let j = 0; j < extras.length; j++) {
        if (extras[j] === "ExtraToppings") {
          cost += 2;
        } else if (extras[j] === "ExtraSauce") {
          cost += 1;
        }
      }
    }
  }
  return cost;
}
