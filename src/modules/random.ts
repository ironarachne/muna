'use strict';

import random from 'random';

export function chance(max: number): number {
  return random.int(1, max);
}

export function item(items: any[]) {
  return items[random.int(0, items.length - 1)];
}

export function bellFloat(min: number, max: number): number {
  const divisor = (max - min) / 3;

  let result = min;

  for (let i = 0; i < 3; i++) {
    result += random.float(0, divisor);
  }

  return result;
}

export function randomSet(itemCount: number, items: any[]): any[] {
  let result = [];

  items = shuffle(items);

  for (let i = 0; i < itemCount; i++) {
    result.push(items.pop());
  }

  return result;
}

export function randomString(length: number): string {
  let result: string = '';

  for (let i = 0; i < length; i++) {
    result += Math.random().toString(36).slice(2)[0];
  }

  return result;
}

export function shuffle(items: any[]) {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = items[i];
    items[i] = items[j];
    items[j] = temp;
  }

  return items;
}

export function weighted(items: any[]) {
  let ceiling = 0;

  if (items.length == 1) {
    return items[0];
  }

  items.forEach(function (item: any) {
    ceiling += item.commonality;
  });

  let randomValue = random.int(0, ceiling);

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    randomValue -= item.commonality;
    if (randomValue <= 0) {
      return item;
    }
  }

  console.error(
    `Tried to get weighted result from array with length ${items.length}, failed to get anything back`,
  );
}
