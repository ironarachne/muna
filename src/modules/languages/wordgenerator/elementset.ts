'use strict';

export default class WordElementSet {
  name: string;
  symbol: string;
  elements: string[];

  constructor(name: string, symbol: string, elements: string[]) {
    this.name = name;
    this.symbol = symbol;
    this.elements = elements;
  }
}
