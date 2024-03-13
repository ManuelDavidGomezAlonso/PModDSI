import { Evento } from "./modificacion2Evento.js";
import { EventObservable } from "./mod2Observable.js";
import { EventObserver } from "./mod2Observer.js";

const event = new Evento ('hola', 'adios');

const eventoobservable = new EventObservable();

const observer = new EventObserver('1');

eventoobservable.notify(event);
eventoobservable.subscribe(observer);
