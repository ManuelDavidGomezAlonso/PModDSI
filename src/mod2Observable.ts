import { Observable, Event, Observer } from "./modificacion2.js";

/**
 * @brief Clase que adminsitrará los eventos.
 */
export class EventObservable<T extends Event<T>> implements Observable<T> {
    private observers: Observer<T>[] = [];
    constructor(){
    }
/**
 * @brief Metodo subscribe para cumplir con interfaz Observable
 * @param observer Objeto de la clase observer.
 */
    subscribe(observer: Observer<T>): void {
        if (this.observers.includes(observer)) {
            throw new Error('The observer had already been subscribed');
          } else {
            this.observers.push(observer);
          }
    }
/**
 * @brief Método para eliminar un observer.
 * @param observer Objeto observer a eliminar.
 */
    unsubscribe(observer: Observer<T>): void {
        const index = this.observers.indexOf(observer);
        if (index === -1) {
          throw new Error('The observer has not been subscribed');
        } else {
          this.observers.splice(index, 1);
        }
    }

    notify(arg0: T) {
        this.observers.forEach((observer) => observer.update(arg0));
    }
}