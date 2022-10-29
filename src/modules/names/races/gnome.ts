'use strict';

import NameGenerator from '../generator';
import GenericNameGenerator from '../generators/generic';
import GeneratorSet from '../generatorset';

export default class GnomeSet extends GeneratorSet {
  constructor() {
    super();
    this.family = family();
    this.female = female();
    this.male = male();
  }
}

function family(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ['vPSpvMS', 'cvnKLER', 'cvdLER', 'cvdER', 'pvpLOp'];

  const prefixes = [
    'AGATE',
    'ALLOY',
    'COPPER',
    'CRYSTAL',
    'DIAMOND',
    'DUST',
    'GEM',
    'GOLD',
    'IRON',
    'JADE',
    'JET',
    'JEWEL',
    'ONYX',
    'OPAL',
    'PELLET',
    'RUBY',
    'SAPPHIRE',
    'SILVER',
    'WIRE',
  ];

  const suffixes = [
    'BITER',
    'BOPPER',
    'BRANDER',
    'CHARMER',
    'CHEST',
    'DROPPER',
    'HAMMER',
    'MALLET',
    'POPPER',
    'SEEDER',
    'SENDER',
    'SHAPER',
    'SWEEPER',
    'TINKER',
    'TRADER',
    'WATCHER',
    'WEAVER',
    'WINKER',
    'WOOSHER',
    'WORKER',
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
    'avNNA',
    'SHvNvDDI',
    'MvoLI',
    'voAnA',
    'voAnI',
    'vvTHNE',
    'ovpv',
    'SNvflvnv',
    'pvdvnv',
  ];

  return gen;
}

function male(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ['Blvocvf', 'oOdvp', 'pvnlv', 'pvnp', 'cvlVER', 'wvlVER', 'pvlwvl', 'pvlwv'];

  return gen;
}
