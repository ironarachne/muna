"use strict";

import * as RND from "../random";
import ElvishSet from "./cultures/elvish";
import FantasySet from "./cultures/fantasy";
import GeneratorSet from "./generatorset";
import GermanicSet from "./cultures/germanic";
import JapanishSet from "./cultures/japanish";

export function allGenSets(): GeneratorSet[] {
  return [
    new GermanicSet(),
    new FantasySet(),
    new JapanishSet(),
    new ElvishSet(),
  ];
}

export function randomGenSet(): GeneratorSet {
  let all = allGenSets();

  return RND.item(all);
}

export function getSetByName(name: string): GeneratorSet | null {
  let all = allGenSets();

  for (let i = 0; i < all.length; i++) {
    if (all[i].name === name) {
      return all[i];
    }
  }

  console.error("Could not find set with name: " + name);
  return null;
}
