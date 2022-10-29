'use strict';

import NameGenerator from '../generator';
import GenericNameGenerator from '../generators/generic';
import GeneratorSet from '../generatorset';

export default class DragonbornSet extends GeneratorSet {
  constructor() {
    super();
    this.family = family();
    this.female = female();
    this.male = male();
  }
}

function family(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ['vlpvlvn', 'ovlMvRvV', 'pvRRcYlION', 'pvRRcYlIvN', 'pvdcYlIvN', 'cvRvXIUS'];

  let prefixes = [
    'WHITE',
    'GREEN',
    'BLUE',
    'WILD',
    'SUMMER',
    'WINTER',
    'WIND',
    'DAWN',
    'DUSK',
    'SKY',
    'NIGHT',
    'FIRE',
    'FLAME',
    'RAGE',
    'HAMMER',
    'RED',
    'DARK',
    'SPELL',
    'WAR',
  ];

  let suffixes = ['BLADE', 'BROW', 'SCALE', 'SPEAR', 'RIDER', 'WALKER', 'RUNNER', 'TALON'];

  for (let i = 0; i < prefixes.length; i++) {
    for (let j = 0; j < suffixes.length; j++) {
      gen.patterns.push(prefixes[i] + suffixes[j]);
    }
  }

  return gen;
}

function female(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ['tvMvt', 'cv+l', 'cvlv', 'ovRRv', 'lAIvNN'];

  return gen;
}

function male(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ['vlKvSIA', 'cvLvSAR', 'cvlvt', 'ovnv+R'];

  return gen;
}
