'use strict';

import GenericNameGenerator from '../generators/generic';

export default class StarNationNameGenerator extends GenericNameGenerator {
  constructor() {
    super();
    this.patterns = [
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
  }
}
