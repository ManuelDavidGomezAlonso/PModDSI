import 'mocha';
import { expect } from 'chai';
import {ArithmeticableCollection, Complex, Rational, Adapter } from '../src/modificacion';

describe('Pruebas añadiendo elementos a la colección.', () => {
    const complex1 = new Complex(1,2);
    const rational1 = new Rational(1,2);
    const rational2 = new Rational(5,2);
    const complex2 = new Complex(-2,3);
    const collection = new ArithmeticableCollection([rational1,complex2]); 

  it('Añadimos 1 elemeto', () => {
    collection.addArithmeticable(complex1);                                
    expect(collection.collect).to.have.lengthOf(3);
  });

  it('Añadimos 2 elementos', () => {
    collection.addArithmeticable(complex1);                                 
    collection.addArithmeticable(rational2);                               
    expect(collection.collect).to.have.lengthOf(5);
  });
});

describe('Pruebas Comprobando tamaño', () => {
  const rational1 = new Rational(1,2);
  const complex2 = new Complex(-2,3);
  const collection = new ArithmeticableCollection([rational1,complex2]);
  it('Comprobando tamaño = 2', () =>{
    expect(collection.collect.length).to.equal(2);
  });
});

describe('Pruebas sobre Adaptador', () => {
    const rational1 = new Rational(1,2);
    const complex2 = new Complex(-2,3);
    const adapt = new Adapter(rational1);
    it('Comprobando conversión', () =>{
        expect(adapt.getReal()).to.equal(0.5);
        expect(adapt.getImagin()).to.equal(0);
    });
    it('Comprobando compatibilidad de suma', () =>{
        expect(complex2.add(adapt).getReal()).to.equal(-1.5);
        expect(complex2.add(adapt).getImagin()).to.equal(complex2.getImagin());
    });
    it('Comprobando compatibilidad en multiplicación', () => {
        expect(complex2.multiply(adapt).getReal()).to.equal(-1);
    });
    it('Comprobando compatibilidad en la división', () =>{
        expect(complex2.divide(adapt).getReal()).to.equal(adapt.getReal() * complex2.getReal());
    });
});

describe('Comprobando que se puede incluir un racional adaptado a colección de aritméticos.', () => {
    const rational1 = new Rational(1,2);
    const complex2 = new Complex(-2,3);
    const adapt = new Adapter(rational1);
    const collection = new ArithmeticableCollection<Rational | Complex>([rational1]); 
    it('Añadimos 1 elemeto Adapter', () => {
        collection.addArithmeticable(complex2);                                
        collection.addArithmeticable(adapt);
        expect(collection.collect).to.have.lengthOf(3);
      });
});