'use strict';

import * as RND from '../random';
import GeneratorSet from './generatorset';
import DragonbornSet from './races/dragonborn';
import DwarfSet from './races/dwarf';
import ElfSet from './races/elf';
import GnomeSet from './races/gnome';
import HalfElfSet from './races/halfelf';
import HalflingSet from './races/halfling';
import HalfOrcSet from './races/halforc';
import HumanSet from './races/human';
import TieflingSet from './races/tiefling';

export function allGenSets(): GeneratorSet[] {
  return [
    new DragonbornSet(),
    new DwarfSet(),
    new ElfSet(),
    new GnomeSet(),
    new HalfElfSet(),
    new HalflingSet(),
    new HalfOrcSet(),
    new HumanSet(),
    new TieflingSet(),
  ];
}

export function randomGenSet(): GeneratorSet {
  let all = allGenSets();

  return RND.item(all);
}
