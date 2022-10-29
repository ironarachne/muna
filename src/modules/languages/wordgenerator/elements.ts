'use strict';

import WordElementSet from './elementset';

export function all(): WordElementSet[] {
  return [
    new WordElementSet('affricates', 'a', ['ch', 'j']),
    new WordElementSet('voiced dental plosive', 'b', ['d', 'dh']),
    new WordElementSet('consonants', 'c', [
      'b',
      'c',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      'm',
      'n',
      'p',
      'q',
      'r',
      's',
      't',
      'v',
      'w',
      'x',
      'y',
      'z',
    ]),
    new WordElementSet('dentals', 'e', ['d', 'n', 't', 'l']),
    new WordElementSet('fricatives', 'f', ['f', 'v']),
    new WordElementSet('voiceless dental plosives', 'h', ['t', 'th']),
    new WordElementSet('voiceless', 'i', ['h', 'f']),
    new WordElementSet('velar plosives', 'k', ['c', 'k']),
    new WordElementSet('liquids', 'l', ['l', 'r']),
    new WordElementSet('close mid vowels', 'm', ['i', 'ö', 'eu', 'oe', 'e']),
    new WordElementSet('nasals', 'n', ['m', 'n', 'ng']),
    new WordElementSet('stops', 'o', ['t', 'd', 'p']),
    new WordElementSet('plosives', 'p', ['g', 'k', 'p', 'b', 't', 'd', 'q']),
    new WordElementSet('sibilants', 's', ['s', 'sh', 'z', 'zh']),
    new WordElementSet('stridents', 't', ['f', 'v', 's', 'sh', 'z', 'zh']),
    new WordElementSet('vowels', 'v', ['a', 'e', 'i', 'o', 'u']),
    new WordElementSet('velars', 'w', ['w', 'wh', 'g']),
    new WordElementSet('accented vowels', 'x', ['á', 'é', 'í', 'ó', 'ú']),
    new WordElementSet('open vowels', 'y', ['e', 'ee', 'i', 'oo', 'y', 'ie']),
  ];
}
