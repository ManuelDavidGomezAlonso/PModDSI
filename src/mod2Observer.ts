import { Event, Observer } from "./modificacion2.js";
import { Evento } from "./modificacion2Evento.js";
/**
 * @brief Esra clase observará nuestros objetos.
 */
export class EventObserver implements Observer<Evento> {
    constructor(public id: string) {
    }
    update(param: Event<Evento> ) {
        console.log(`I am a ButtonObserver called ${this.id} ` +
        `and I have observed that Button ${param.id} ` +
        `and ${param.data}`);
    }
}