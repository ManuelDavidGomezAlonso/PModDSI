// Patron de diseño Strategy - Comportamiento 
//  Permite escribir algoritmos de clases independientes de tal manera que 
//  los diferentes objetos de las clases sean intercambiables.
//
//

/**
 * This is an example of context class
 */
class Solver {
  /**
   * The context has a reference to a Strategy object. It should only works
   * with strategies through the Strategy interface
   */
  constructor(private data: number[], private strategy: Strategy) {
  }

  /**
   * A setter is required in order to change the strategy in execution time
   * @param strategy Current strategy applied
   */
  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  /**
   * The context delegates some work to the Strategy object
   */
  logic() {
    this.strategy.execute(this.data);
  }
}

/**
 * Common interface to all Strategy objects. The context uses this
 * interface to work with strategies
 */
interface Strategy {
  execute(data: number[]): void;
}

/**
 * Some concrete strategy
 */
class FirstAlgorithm implements Strategy {
  execute(data: number[]) {
    console.log(`First algorithm applied to ${data}`);
  }
}

/**
 * Some concrete strategy
 */
class SecondAlgorithm implements Strategy {
  execute(data: number[]) {
    console.log(`Second algorithm applied to ${data}`);
  }
}

/**
 * Some concrete strategy
 */
class ThirdAlgorithm implements Strategy {
  execute(data: number[]) {
    console.log(`Third algorithm applied to ${data}`);
  }
}

// Client code
const mySolver = new Solver([1, 2, 3], new FirstAlgorithm());
mySolver.logic();

mySolver.setStrategy(new SecondAlgorithm());
mySolver.logic();

mySolver.setStrategy(new ThirdAlgorithm());
mySolver.logic();