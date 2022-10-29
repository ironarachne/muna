'use strict';

import * as RND from '../random';

import random from 'random';

export function generate() {
  const nameType = RND.item([
    {
      generate: function () {
        const modelNumberPrefix = RND.item(['Y', 'M', 'R', 'X', 'T', 'S', 'J', 'G', 'H']);

        const modelNumberSuffix = random.int(1, 9) * 10;

        return `${modelNumberPrefix}-${modelNumberSuffix}`;
      },
    },
    {
      generate: function () {
        const modelNumberPrefix1 = RND.item(['A', 'E', 'I', 'O', 'U']);
        const modelNumberPrefix2 = RND.item(['Y', 'M', 'R', 'X', 'T', 'S', 'J', 'G', 'H']);

        const modelNumberSuffix = random.int(1, 9) * 10;

        return `${modelNumberPrefix1}${modelNumberPrefix2}-${modelNumberSuffix}`;
      },
    },
    {
      generate: function () {
        const modelNumberPrefix1 = RND.item(['B', 'R', 'X', 'S', 'N']);
        const modelNumberPrefix2 = RND.item(['Y', 'M', 'I', 'K', 'T', 'Q', 'J', 'G', 'H']);

        const modelNumberSuffix = random.int(1, 99) * 100;

        return `${modelNumberPrefix1}${modelNumberPrefix2}-${modelNumberSuffix}`;
      },
    },
  ]);

  return nameType.generate();
}
