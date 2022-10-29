'use strict';

import Phoneme from './phoneme';

export default class Morpheme {
  phonemes: Phoneme[];

  constructor() {
    this.phonemes = [];
  }

  getPronunciation(): string {
    return this.phonemes.map((p) => p.sound).join('');
  }

  getTranscription(): string {
    return this.phonemes.map((p) => p.transcriptions[0]).join('');
  }
}
