"use strict";

import NameGenerator from "./generator";
import GenericNameGenerator from "./generators/generic";

export default class GeneratorSet {
  name: string;
  culture: NameGenerator;
  country: NameGenerator;
  family: NameGenerator;
  female: NameGenerator;
  male: NameGenerator;
  town: NameGenerator;

  constructor() {
    this.name = "";
    this.culture = new GenericNameGenerator();
    this.country = new GenericNameGenerator();
    this.family = new GenericNameGenerator();
    this.female = new GenericNameGenerator();
    this.male = new GenericNameGenerator();
    this.town = new GenericNameGenerator();
  }
}
