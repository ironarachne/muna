'use strict';

import * as Invented from './invented';

export function generate() {
  const patterns = [
    'pvn',
    'pvnvn',
    'pvnvv',
    'slvnvn',
    'lvfv',
    'lvfvn',
    'tvtv',
    'pvtv+n',
    'pvtv+',
    'pv+c+v',
    'tv+c+v',
    'slv+c+vv',
    'pvnvlv',
    'pvnvlvnv',
    'svnvlvnv',
    'pv+llvlv',
    'pvpvpv+n',
    'slv+c+v+n',
    'slvc+vn',
    'slvc+vnv',
    'slvpvpv',
    'slvpv+pv',
  ];

  return Invented.generate(patterns);
}
