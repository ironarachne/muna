'use strict';

import GenericNameGenerator from '../generators/generic';
import GeneratorSet from '../generatorset';

export default class GermanicSet extends GeneratorSet {
  constructor() {
    super();
    this.name = 'germanic';
    this.country = country();
    this.culture = culture();
    this.family = family();
    this.female = female();
    this.male = male();
    this.town = town();
  }
}

function culture(): GenericNameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ['kmlMyNmN', 'kmlMyNm', 'kmTHmk'];

  return gen;
}

function country(): GenericNameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ['pmkLAND', 'lyMvNIEN', 'evtLAND', 'pvtmNIEN', 'eynMARK'];

  return gen;
}

function family(): GenericNameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    'ivRSoMANN',
    'SCHnveZLmR',
    'SCHnve',
    'wvnZFRyD',
    'kmnvG',
    'kmnvR',
    'kmnIG',
    'wmnFRyD',
  ];

  return gen;
}

function female(): GenericNameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    'avNNIiER',
    'sAnoRA',
    'sARA',
    'smlInA',
    'imlEN',
    'imlENA',
    'yLnA',
    'bAlIA',
    'hAlIA',
    'wILnA',
    'NAbIA',
    'NmbIA',
    'kARmlINE',
    'vLmNORA',
  ];

  return gen;
}

function male(): GenericNameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    'Mvlk',
    'vRNmn',
    'MmTHIAS',
    'NmkO',
    'kOnRAD',
    'kmnR',
    'oInO',
    'lUoA',
    'LvRs',
    'MvGnUs',
    'Nvo',
  ];

  return gen;
}

function town(): GenericNameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    'vpENBERG',
    'vpmnBERG',
    'vpnSBERG',
    'kvnBERG',
    'pmRpENHEIM',
    'pmRpHEIM',
    'imnENFELD',
    'imRSFELD',
    'vpENBURG',
    'vpmnBURG',
    'vpnSBURG',
    'kvnBURG',
  ];

  return gen;
}
