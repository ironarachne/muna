"use strict";

import Phoneme from "./phoneme";
import * as Phonemes from "./phonemes";

export default class PhonemeSet {
  name: string;
  phonemes: Record<string, Phoneme>;

  constructor(name: string) {
    this.name = name;
    this.phonemes = initializePhonemeSet();
  }

  getPhonemes(): Phoneme[] {
    let phonemes = [];

    for (const phoneme in this.phonemes) {
      phonemes.push(this.phonemes[phoneme]);
    }

    return phonemes;
  }
}

function initializePhonemeSet(): Record<string, Phoneme> {
  let all = Phonemes.all();
  let phonemes: Record<string, Phoneme> = {};
  for (const phoneme of all) {
    phonemes[phoneme.sound] = phoneme;
  }

  return phonemes;
}
