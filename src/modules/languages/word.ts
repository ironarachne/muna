'use strict';

export default class Word {
  root: string;
  pronunciation: string;
  speechPart: string;
  meaning: string;

  constructor(speechPart: string, meaning: string) {
    this.root = '';
    this.pronunciation = '';
    this.speechPart = speechPart;
    this.meaning = meaning;
  }
}
