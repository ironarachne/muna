'use strict';

import PhonemeSet from './phonemeset';
import * as PhonemeSets from './phonemesets';

export default class LanguageGeneratorConfig {
  phonemeSets: PhonemeSet[];

  constructor() {
    this.phonemeSets = PhonemeSets.all();
  }
}
