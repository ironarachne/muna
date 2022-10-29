'use strict';

import Phoneme from './phoneme';

export function all(): Phoneme[] {
  return [
    new Phoneme('b', ['b'], ['consonant', 'bilabial', 'plosive', 'voiced'], 1),
    new Phoneme('c', ['c', 'k'], ['consonant', 'palatal', 'plosive', 'voiceless'], 1),
    new Phoneme(
      'ch',
      ['ch'],
      ['affricate', 'consonant', 'palato-alveolar', 'sibilant', 'voiceless'],
      1,
    ),
    new Phoneme('d', ['d'], ['alveolar', 'consonant', 'dental', 'plosive', 'voiced'], 1),
    new Phoneme('dʒ', ['j'], ['affricate', 'consonant', 'postalveolar', 'voiced'], 1),
    new Phoneme('tʃ', ['ch'], ['affricate', 'consonant', 'postalveolar', 'voiceless'], 1), // e.g. beach
    new Phoneme('f', ['f'], ['consonant', 'voiceless', 'fricative', 'labiodental'], 1),
    new Phoneme('g', ['g'], ['consonant', 'plosive', 'velar', 'voiced'], 1),
    new Phoneme('h', ['h'], ['consonant', 'voiceless', 'fricative', 'glottal', 'transition'], 1),
    new Phoneme('j', ['j'], ['affricate', 'consonant', 'sibilant'], 1),
    new Phoneme('k', ['k'], ['consonant', 'plosive', 'velar', 'voiceless'], 1),
    new Phoneme(
      'l',
      ['l', 'll'],
      ['alveolar', 'consonant', 'dental', 'lateral', 'liquid', 'voiced'],
      1,
    ),
    new Phoneme('m', ['m'], ['bilabial', 'consonant', 'nasal', 'occlusive', 'voiced'], 1),
    new Phoneme('n', ['n'], ['alveolar', 'consonant', 'dental', 'nasal', 'occlusive', 'voiced'], 1),
    new Phoneme('ŋ', ['ng'], ['consonant', 'nasal', 'velar', 'voiced'], 1),
    new Phoneme('p', ['p'], ['bilabial', 'consonant', 'plosive', 'voiced'], 1),
    new Phoneme('q', ['q'], ['consonant', 'plosive', 'uvular', 'voiceless'], 1),
    new Phoneme('ɹ', ['r'], ['consonant', 'liquid', 'rhotic'], 1),
    new Phoneme('r', ['rr'], ['alveolar', 'consonant', 'trill', 'voiced'], 1),
    new Phoneme('s', ['s', 'c'], ['consonant', 'coronal', 'fricative', 'voiceless'], 1),
    new Phoneme('ʃ', ['sh'], ['consonant', 'fricative', 'sibilant'], 1),
    new Phoneme('ʒ', ['si', 'zh'], ['consonant', 'fricative', 'palato-alveolar', 'sibilant'], 1),
    new Phoneme('ɾ', ['tt'], ['alveolar', 'consonant', 'voiced', 'tap'], 1),
    new Phoneme('ɽ', ['dd'], ['alveolar', 'consonant', 'voiced', 'tap'], 1),
    new Phoneme('t', ['t'], ['consonant', 'dental', 'plosive', 'voiceless'], 1),
    new Phoneme(
      'ts',
      ['ts', 'tsu'],
      ['affricate', 'alveolar', 'consonant', 'fricative', 'voiceless'],
      1,
    ),
    new Phoneme('θ', ['th'], ['consonant', 'fricative', 'voiceless'], 1),
    new Phoneme('ð', ['th'], ['consonant', 'fricative', 'voiced'], 1),
    new Phoneme('v', ['v'], ['consonant', 'fricative', 'labiodental', 'voiced'], 1),
    new Phoneme('w', ['w'], ['approximant', 'consonant', 'velar', 'voiced'], 1),
    new Phoneme('x', ['ch', 'k'], ['consonant', 'fricative', 'velar', 'voiceless'], 1),
    new Phoneme('y', ['y'], ['approximant', 'consonant', 'palatal', 'voiced'], 1),
    new Phoneme('z', ['z', 'x'], ['aveolar', 'consonant', 'fricative', 'voiced'], 1),
    new Phoneme('ə', ['a'], ['central', 'unrounded', 'vowel'], 1), // e.g., the a in Tina
    new Phoneme('e', ['ay', 'e'], ['close-mid', 'front', 'unrounded', 'vowel'], 1), // e.g. may
    new Phoneme('aɪ', ['ai', 'y', 'ie', 'igh'], ['vowel'], 1),
    new Phoneme('aʊ', ['ou'], ['vowel'], 1),
    new Phoneme('æ', ['a'], ['front', 'unrounded', 'vowel'], 1),
    new Phoneme('ɔ', ['o'], ['back', 'unrounded', 'vowel'], 1),
    new Phoneme('a', ['a'], ['open', 'front', 'unrounded', 'vowel'], 1), // e.g. hat in Texan/Californian dialect
    new Phoneme('ɒ', ['ough', 'a', 'o'], ['back', 'open', 'rounded', 'vowel'], 1),
    new Phoneme('ɛ', ['e'], ['front', 'unrounded', 'vowel'], 1),
    new Phoneme('o', ['aw'], ['close-mid', 'back', 'unrounded', 'vowel'], 1), // e.g. yawn in Australian dialect
    new Phoneme('ɪ', ['i'], ['front', 'unrounded', 'vowel'], 1),
    new Phoneme('ʌ', ['u', 'oo'], ['back', 'open-mid', 'unrounded', 'vowel'], 1), // e.g. foot
    new Phoneme('ʊ', ['u'], ['near-back', 'rounded', 'vowel'], 1),
    new Phoneme('i', ['i', 'ee'], ['close', 'front', 'unrounded', 'vowel'], 1), // e.g. free
    new Phoneme('ʊ', ['oo'], ['near-close', 'near-back', 'rounded', 'vowel'], 1), // e.g. hook
    new Phoneme('ɔɪ', ['oi', 'oy'], ['vowel'], 1),
    new Phoneme('u', ['u', 'oo'], ['close', 'back', 'rounded', 'vowel'], 1), // e.g. food
  ];
}

export function byClassification(classification: string, phonemes: Phoneme[]): Phoneme[] {
  return phonemes.filter((phoneme) => phoneme.classifiers.includes(classification));
}

export function bySound(sound: string, phonemes: Phoneme[]): Phoneme {
  return phonemes.filter((phoneme) => phoneme.sound === sound)[0];
}

export function getConsonants(phonemes: Phoneme[]): Phoneme[] {
  let result = byClassification('consonant', phonemes);
  return result;
}

export function getVowels(phonemes: Phoneme[]): Phoneme[] {
  let result = byClassification('vowel', phonemes);
  return result;
}
