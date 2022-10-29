'use strict';

import Conjugation from './conjugation';
import Lexicon from './lexicon';
import PhonemeSet from './phonemeset';

export default class Language {
  name: string;
  lexicon: Lexicon;
  phonemeSet: PhonemeSet;
  conjugations: Conjugation[];
  wordOrder: string;

  constructor(name: string, phonemeSet: PhonemeSet) {
    this.name = name;
    this.phonemeSet = phonemeSet;
    this.conjugations = [];
    this.lexicon = new Lexicon();
    this.wordOrder = '';
  }
}
