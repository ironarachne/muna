"use strict";

import NameGenerator from "../generator";
import GenericNameGenerator from "../generators/generic";
import GeneratorSet from "../generatorset";

export default class DwarfSet extends GeneratorSet {
  constructor() {
    super();
    this.family = family();
    this.female = female();
    this.male = male();
  }
}

function family(): NameGenerator {
  let gen = new GenericNameGenerator();

  const prefixes = [
    "BATTLE",
    "BROAD",
    "COPPER",
    "FIRE",
    "GEM",
    "GOLD",
    "INGOT",
    "JADE",
    "OAK",
    "ONYX",
    "ROCK",
    "RUBY",
    "SILVER",
    "STEEL",
    "STONE",
  ];

  const suffixes = [
    "BANE",
    "BEARD",
    "BREWER",
    "CHIN",
    "FALL",
    "FOOT",
    "GRIP",
    "HAMMER",
    "HILL",
    "MOUNTAIN",
    "RIVER",
    "TUNNEL",
  ];

  for (let i = 0; i < prefixes.length; i++) {
    for (let j = 0; j < suffixes.length; j++) {
      gen.patterns.push(prefixes[i] + suffixes[j]);
    }
  }

  return gen;
}

function female(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    "pvRINv",
    "pWvlINA",
    "pvlInv",
    "THvlIn",
    "pvMLInA",
    "pvNLInA",
    "pvFURA",
    "pvFvlA",
    "slvlINA",
  ];

  return gen;
}

function male(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    "pvRI(M,N)",
    "pWvlI(M,N)",
    "pvlI(M,N)",
    "THvlI(M,N)",
    "pvMLI",
    "pvNLI",
    "plxI(M,N)",
    "pv(F,FF)UR",
    "pv(F,FF)vl",
    "slmlI(M,N)",
  ];

  return gen;
}
