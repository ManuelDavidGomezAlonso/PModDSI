"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null",
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adapter =
  exports.Rational =
  exports.Complex =
  exports.ArithmeticableCollection =
    void 0;
/**
 * @brief Clase que gestiona un conjunto de Aritméticos, mediante un vector de tipo genérico.
 */
var ArithmeticableCollection = /** @class */ (function () {
  /**
   * @brief Constructor de la clase ArithmeticableCollection.
   * @param collect Un vector generico de tipo T que almacenará los objetos aritméticos.
   */
  function ArithmeticableCollection(collect) {
    this.collect = collect;
  }
  /**
   * @brief Añade un elemento aritmético al conjunto.
   * @param newElement Elemento aritmético que se añadirá al conjunto.
   */
  ArithmeticableCollection.prototype.addArithmeticable = function (newElement) {
    this.collect.push(newElement);
  };
  /**
   * @brief Obtiene un elemento aritmético del conjunto.
   * @param index Indice del elemento aritmético que se quiere obtener.
   */
  ArithmeticableCollection.prototype.getArithmeticable = function (index) {
    this.collect[index];
  };
  return ArithmeticableCollection;
})();
exports.ArithmeticableCollection = ArithmeticableCollection;
/**
 * @brief Clase que implementa números complejos y sus respectivas operaciones.
 */
var Complex = /** @class */ (function () {
  /**
   * @breif Constructor de la clase Complex.
   * @param real Parte real del complejo.
   * @param imaginario Parte imaginaria del complejo.
   */
  function Complex(real, imaginario) {
    this.real = real;
    this.imaginario = imaginario;
  }
  /**
   * @brief Suma de números complejos.
   * @param complejo Complejo a sumar con el actual.
   * @returns Resultado numérico de la suma.
   */
  Complex.prototype.add = function (complejo) {
    return new Complex(
      this.real + complejo.getReal(),
      complejo.getImagin() + this.imaginario,
    );
  };
  /**
   * @brief Resta de números complejos.
   * @param complejo Complejo a restar con el actual.
   * @returns Resultado numérico de la resta.
   */
  Complex.prototype.substract = function (complejo) {
    return new Complex(
      this.real - complejo.getReal(),
      complejo.getImagin() + this.imaginario,
    );
  };
  /**
   * @brief Multiplicación de números complejos.
   * @param complejo Complejo en el multiplicando de la operación.
   * @returns Resultado numérico de la multiplicación.
   */
  Complex.prototype.multiply = function (complejo) {
    return new Complex(
      this.real * complejo.getReal() - this.imaginario * complejo.getImagin(),
      this.real * complejo.getImagin() + this.imaginario * complejo.getReal(),
    );
  };
  /**
   * @brief División de números complejos.
   * @param complejo Complejo en el dividendo.
   * @returns Resultado numérico de la División.
   */
  Complex.prototype.divide = function (complejo) {
    return new Complex(
      this.real * complejo.getReal() - this.imaginario * complejo.getImagin(),
      this.real * complejo.getImagin() + this.imaginario * complejo.getReal(),
    );
  };
  /**
   * @brief Obtiene la parte imaginaria del número complejo.
   * @returns Parte imaginaria del número complejo.
   */
  Complex.prototype.getImagin = function () {
    return this.imaginario;
  };
  /**
   * @brief Obtiene la parte real del número complejo.
   * @returns Parte real del número complejo.
   */
  Complex.prototype.getReal = function () {
    return this.real;
  };
  return Complex;
})();
exports.Complex = Complex;
/**
 * Clase que implementa numeros racionales y sus respectivas operaciones.
 */
var Rational = /** @class */ (function () {
  function Rational(num, den) {
    this.num = num;
    this.den = den;
  }
  /**
   * @brief Suma de números racionales.
   * @param racional Racional a sumar con el actual.
   * @returns Par numerador, denominador con el resultado de la suma.
   */
  Rational.prototype.add = function (racional) {
    var newNum = this.num * racional.getDen() + racional.getNum() * this.den;
    return new Rational(newNum, this.den * racional.getDen());
  };
  /**
   * @brief Resta de números racionales.
   * @param racional Racional a restar con el actual.
   * @returns Resultado numérico de la resta.
   */
  Rational.prototype.substract = function (racional) {
    var newNum = this.num * racional.getDen() - racional.getNum() * this.den;
    return new Rational(newNum, this.den * racional.getDen());
  };
  /**
   * @brief Multiplicación de números racionales.
   * @param racional Racional en el multiplicando de la operación.
   * @returns Resultado numérico de la multiplicación.
   */
  Rational.prototype.multiply = function (racional) {
    return new Rational(
      this.num * racional.getNum(),
      this.den * racional.getDen(),
    );
  };
  /**
   * @brief división de números racionales.
   * @param racional Racional en el dividendo.
   * @returns Resultado numérico de la División.
   */
  Rational.prototype.divide = function (racional) {
    return new Rational(
      this.num * racional.getDen(),
      racional.getNum() * this.den,
    );
  };
  /**
   * @brief Suma de números racionales.
   * @param racional Racional a sumar con el actual.
   * @returns Resultado numérico de la suma.
   */
  Rational.prototype.getDen = function () {
    return this.den;
  };
  /**
   * @brief Suma de números racionales.
   * @param racional Racional a sumar con el actual.
   * @returns Resultado numérico de la suma.
   */
  Rational.prototype.getNum = function () {
    return this.num;
  };
  return Rational;
})();
exports.Rational = Rational;
/**
 * Clase siguiendo patron adapter, hara que podamos operar un racional y un complejo.
 */
var Adapter = /** @class */ (function (_super) {
  __extends(Adapter, _super);
  /**
   * @brief Constructor de la clase, tipo super, le pasaremos como parte real el resultado del racional y como imaginaria obviamente un 0.
   * @param rationalOp Un número racional a convertir.
   */
  function Adapter(rationalOp) {
    var _this =
      _super.call(this, rationalOp.getNum() / rationalOp.getDen(), 0) || this;
    _this.rationalOp = rationalOp;
    return _this;
  }
  return Adapter;
})(Complex);
exports.Adapter = Adapter;
var rational1 = new Rational(1, 2);
var rational2 = new Rational(5, 2);
var complex1 = new Complex(1, 2);
var complex2 = new Complex(-2, 3);
var adapting = new Adapter(rational1);
var collect = new ArithmeticableCollection([rational1, complex2, adapting]);
collect.addArithmeticable(rational1);
collect.addArithmeticable(rational2);
collect.addArithmeticable(complex1);
collect.getArithmeticable(1);
