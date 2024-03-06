type KnapsackItem = {
  weight: number;
  profit: number;
};
//
// - Marcaremos la clave del singleton a continuación.
// - Este patrón rompe con el principio SOLID - S (Single responsability principle).
//
//
class KnapsackInstance {
  private items: KnapsackItem[];
  private capacity: number;

  // Un atributo de la misma clase para almacenar la única instancia.
  private static knapsackInstance: KnapsackInstance;

  // Un constructor privado para evitar la creación de instancias.
  private constructor() {
    this.items = [];
    this.capacity = 0;
  }
  // Se obtiene la única instancia de la clase si no existe, se crea.
  public static getKnapsackInstance(): KnapsackInstance {
    if (!KnapsackInstance.knapsackInstance) {
      KnapsackInstance.knapsackInstance = new KnapsackInstance();
    }
    return KnapsackInstance.knapsackInstance;
  }

  getCapacity() {
    return KnapsackInstance.knapsackInstance.capacity;
  }

  setCapacity(capacity: number) {
    KnapsackInstance.knapsackInstance.capacity = capacity;
  }

  getItems() {
    return KnapsackInstance.knapsackInstance.items;
  }

  setItems(items: KnapsackItem[]) {
    KnapsackInstance.knapsackInstance.items = items;
  }

  getItem(index: number) {
    if (index >= KnapsackInstance.knapsackInstance.getNumberOfItems()) {
      return undefined;
    }
    return KnapsackInstance.knapsackInstance.items[index];
  }

  addItem(item: KnapsackItem) {
    KnapsackInstance.knapsackInstance.items.push(item);
  }

  getNumberOfItems() {
    return KnapsackInstance.knapsackInstance.items.length;
  }
}

const knapsackInstance = KnapsackInstance.getKnapsackInstance();
knapsackInstance.addItem({ weight: 10, profit: 30 });
const secondKnapsackInstance = KnapsackInstance.getKnapsackInstance();
secondKnapsackInstance.addItem({ weight: 20, profit: 20 });

if (knapsackInstance === secondKnapsackInstance) {
  console.log("We are the same object");
} else {
  console.log("We are different objects");
}

KnapsackInstance.getKnapsackInstance()
  .getItems()
  .forEach((item) => console.log(item));
