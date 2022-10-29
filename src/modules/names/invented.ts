'use strict';

import WordGenerator from '../languages/wordgenerator/generator';
import * as Words from '../words';

export function generate(patterns: string[]): string {
  let generator = new WordGenerator();
  generator.patterns = patterns;

  let name = generator.generate();

  return Words.capitalize(name);
}
