'use strict';

import NameGenerator from '../generator';
import * as Invented from '../invented';
import * as Words from '../../words';

export default class GenericNameGenerator implements NameGenerator {
  name: string;
  patterns: string[];

  constructor() {
    this.name = 'generic';
    this.patterns = [];
  }

  generate(numberOfNames: number): string[] {
    let names = [];

    for (let i = 0; i < numberOfNames; i++) {
      let name = Invented.generate(this.patterns);
      name = Words.title(name);
      names.push(name);
    }

    return names;
  }
}
