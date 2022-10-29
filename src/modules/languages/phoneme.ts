'use strict';

export default class Phoneme {
  sound: string;
  transcriptions: string[];
  classifiers: string[];
  commonality: number;

  constructor(sound: string, transcriptions: string[], classifiers: string[], commonality: number) {
    this.sound = sound;
    this.transcriptions = transcriptions;
    this.classifiers = classifiers;
    this.commonality = commonality;
  }
}
