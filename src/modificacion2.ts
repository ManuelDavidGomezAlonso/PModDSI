/**
 * @brief Interfaz Genérica que define los eventos.
 */
export interface Event<T> {
    id: string;
    data: T;
}
/**
 * @brief Interfaz para cumplir con patron observer (Esta será implementada por los objetos observables.)
 */
export interface Observable<T> {
    subscribe(observer: Observer<T>): void;
    unsubscribe(observer: Observer<T>): void;
    notify(arg0: Event<T>): void;
}

/**
 * @brief Interfaz de la clase observadora.
 */
export interface Observer<T> {
    update(observable: Event<T>):void;
}