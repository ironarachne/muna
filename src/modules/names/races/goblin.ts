'use strict';

import NameGenerator from '../generator';
import GenericNameGenerator from '../generators/generic';
import GeneratorSet from '../generatorset';

export default class GoblinSet extends GeneratorSet {
  constructor() {
    super();
    this.family = family();
    this.female = female();
    this.male = male();
  }
}

function family(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ['BvdvnS', 'pvMpu'];

  const prefixes = [
    'BIG',
    'CRAZE',
    'FEATHER',
    'FLEA',
    'GREASE',
    'HAIRY',
    'HOG',
    'HORN',
    'LONG',
    'OIL',
    'OLD',
    'PUDDING',
    'SLUDGE',
    'SMALL',
    'UGLY',
    'UNDER',
    'WANDER',
  ];

  const suffixes = [
    'BELLY',
    'BOTTOM',
    'BUCKET',
    'DALE',
    'FACE',
    'FOOT',
    'HOUSE',
    'NOSE',
    'STENCH',
    'TOOTH',
    'WART',
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

  gen.patterns = ['oEOnY', 'oEARL', 'pELInDA', 'mvlvnoA', 'plvSovn', 'Mvovlpvlo', 'pvfvnA'];

  return gen;
}

function male(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ['BvlBvK', 'svnwvsENK', 'pvPPvnK', 'pvlvplvS', 'wvnflvo', 'pvlnO', 'vovlpvRT'];

  return gen;
}
