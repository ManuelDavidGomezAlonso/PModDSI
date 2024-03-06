// - Ejemplo de implementación de patrón adapter.
// Objetos con interfaces incompatibles, van a poder colaborar.
//  Adapter permite transformar la interfaz de un objeto para que otro objeto
// sea capaz de entenderla, es decir tranforma a diferentes formatos.
//

class SystemA {
  constructor(private csvData: string = '') {
  }
  getData(): string {
    return this.csvData;
  }
}

type JSONData = {
  name: string;
  surname: string;
  username: string;
}

class SystemB {
  constructor(private jsonData: JSONData = {
    name: '', surname: '', username: ''}) {
  }
  getSpecificData(): JSONData {
    return this.jsonData;
  }
}

// 
class Adapter extends SystemA {
  constructor(private service: SystemB) {
    super();
  }
  getData(): string {
    return `${this.service.getSpecificData().name},` +
           `${this.service.getSpecificData().surname},` +
           `${this.service.getSpecificData().username}`;
  }
}

const systemA = new SystemA('Eduardo,Segredo,esegredo');
const systemB = new SystemB({
  name: 'Eduardo',
  surname: 'Segredo',
  username: 'esegredo',
});

// Client code
function clientCode(data: string) {
  console.log(data);
}

clientCode(systemA.getData());
console.log(systemB.getSpecificData());

// Now, the client code understands the interface provided by SystemB
// through the adapter
const adapter = new Adapter(systemB);
clientCode(adapter.getData());