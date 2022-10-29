'use strict';

import * as RND from '../random';

import random from 'random';

export function generate() {
  let name = 'The ';

  const adjectiveChance = random.int(0, 100);

  if (adjectiveChance > 60) {
    name += RND.item(adjectives()) + ' ';
  }

  name += RND.item(nouns());

  return name;
}

function adjectives() {
  return [
    'Blue',
    'Red',
    'Green',
    'White',
    'Black',
    'Gold',
    'Ivory',
    'Steel',
    'Iron',
    'Old',
    'Little',
    'Fat',
    'Laughing',
    'Growling',
    'Chortling',
    'Dancing',
  ];
}

function nouns() {
  return [
    'Dolphyn',
    'Griffin',
    'Dragon',
    'Wyvern',
    'Wolf',
    'Boar',
    'Pannier',
    "King's Head",
    'Pot',
    "Horse's Head",
    "Ram's Head",
    'Crane',
    'Cony',
    'Ball',
    'Basket',
    'Cross',
    'Cup',
    'Garland',
    'Gate',
    'Hammer',
    'Lattice',
    'Rose',
    'Ship',
    'Mare',
    'Sheep',
    'Pig',
  ];
}
