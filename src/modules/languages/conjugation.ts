'use strict';

import Word from './word';

export default class Conjugation {
  form: string;
  apply: (word: Word) => string;

  constructor(form: string, apply: (word: Word) => string) {
    this.form = form;
    this.apply = apply;
  }
}
