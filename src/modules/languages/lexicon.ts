'use strict';

import Word from './word';

export default class Lexicon {
  words: Word[];

  constructor() {
    this.words = [];

    const adj: string[] = adjectives();

    for (let i = 0; i < adj.length; i++) {
      const word = new Word('adjective', adj[i]);
      this.words.push(word);
    }

    const adv: string[] = adverbs();

    for (let i = 0; i < adv.length; i++) {
      const word = new Word('adverb', adv[i]);
      this.words.push(word);
    }

    const art: string[] = articles();

    for (let i = 0; i < art.length; i++) {
      const word = new Word('article', art[i]);
      this.words.push(word);
    }

    const inter: string[] = interjections();

    for (let i = 0; i < inter.length; i++) {
      const word = new Word('interjection', inter[i]);
      this.words.push(word);
    }

    const prep: string[] = prepositions();

    for (let i = 0; i < prep.length; i++) {
      const word = new Word('preposition', prep[i]);
      this.words.push(word);
    }

    const que: string[] = questions();

    for (let i = 0; i < que.length; i++) {
      const word = new Word('question', que[i]);
      this.words.push(word);
    }

    const ver: string[] = verbs();

    for (let i = 0; i < ver.length; i++) {
      const word = new Word('verb', ver[i]);
      this.words.push(word);
    }

    const nou: string[] = nouns();

    for (let i = 0; i < nou.length; i++) {
      const word = new Word('noun', nou[i]);
      this.words.push(word);
    }

    const nm: string[] = numbers();

    for (let i = 0; i < nm.length; i++) {
      const word = new Word('number', nm[i]);
      this.words.push(word);
    }

    const pro: string[] = pronouns();

    for (let i = 0; i < pro.length; i++) {
      const word = new Word('pronoun', pro[i]);
      this.words.push(word);
    }
  }

  getWordsBySpeechPart(speechPart: string): Word[] {
    return this.words.filter((word) => word.speechPart == speechPart);
  }
}

function adjectives() {
  return [
    'aromatic',
    'basted',
    'big',
    'bitter',
    'black',
    'blue',
    'brown',
    'chilled',
    'cold',
    'curried',
    'dark',
    'deep',
    'divine',
    'drunk',
    'empty',
    'evil',
    'familiar',
    'fat',
    'flat',
    'frail',
    'fried',
    'full',
    'good',
    'green',
    'grey',
    'honest',
    'hot',
    'light',
    'long',
    'loud',
    'mortal',
    'mysterious',
    'narrow',
    'old',
    'orange',
    'pungent',
    'purple',
    'quiet',
    'raw',
    'rectangular',
    'red',
    'roasted',
    'round',
    'salty',
    'savory',
    'shallow',
    'short',
    'smoked',
    'sober',
    'sour',
    'spicy',
    'spiral',
    'square',
    'steamed',
    'strange',
    'strong',
    'sturdy',
    'sweet',
    'tall',
    'thick',
    'thin',
    'warm',
    'weak',
    'white',
    'wide',
    'yellow',
    'young',
  ];
}

function adverbs() {
  return ['again', 'now', 'soon', 'often', 'sometimes', 'always', 'never', 'seldom'];
}

function articles() {
  return ['a', 'the'];
}

function interjections() {
  return ['hello', 'goodbye', 'hey', 'bye', 'ouch', 'wow', 'uh', 'er', 'um'];
}

function prepositions() {
  return ['and', 'as', 'from', 'in', 'of', 'or', 'to', 'will', 'with'];
}

function questions() {
  return ['what', 'who', 'how', 'why', 'when'];
}

function verbs() {
  return [
    'bake',
    'be',
    'belong',
    'bite',
    'break',
    'burn',
    'come',
    'die',
    'drink',
    'eat',
    'fall',
    'fight',
    'find',
    'fish',
    'fly',
    'frown',
    'go',
    'growl',
    'hate',
    'have',
    'hear',
    'hide',
    'hold',
    'hunt',
    'jump',
    'kill',
    'know',
    'laugh',
    'lie',
    'live',
    'lose',
    'love',
    'need',
    'own',
    'roast',
    'run',
    'see',
    'sit',
    'sleep',
    'smell',
    'smile',
    'stand',
    'strike',
    'swallow',
    'swim',
    'taste',
    'throw',
    'walk',
    'want',
  ];
}

function nouns() {
  return [
    'afternoon',
    'ale',
    'all',
    'alligator',
    'arm',
    'ash',
    'aunt',
    'axe',
    'bark',
    'bay',
    'beer',
    'beet',
    'bird',
    'blood',
    'boar',
    'bone',
    'breakfast',
    'breast',
    'brother',
    'castle',
    'cat',
    'cat',
    'chest',
    'chicken',
    'claw',
    'cloud',
    'coconut',
    'crime',
    'day',
    'dinner',
    'dog',
    'drink',
    'dungeon',
    'ear',
    'earth',
    'egg',
    'elder',
    'enemy',
    'evening',
    'eye',
    'family',
    'father',
    'feather',
    'fight',
    'finger',
    'fire',
    'fish',
    'flesh',
    'foot',
    'forest',
    'fox',
    'friend',
    'goose',
    'grease',
    'group',
    'gulf',
    'hair',
    'hand',
    'hat',
    'hate',
    'head',
    'hill',
    'horn',
    'horse',
    'house',
    'inn',
    'island',
    'jaw',
    'lake',
    'leaf',
    'leg',
    'liver',
    'louse',
    'love',
    'lunch',
    'man',
    'many',
    'meal',
    'metal',
    'mine',
    'monster',
    'moon',
    'morning',
    'mother',
    'mountain',
    'mouth',
    'name',
    'neck',
    'night',
    'noodle',
    'nose',
    'ocean',
    'parent',
    'path',
    'peace',
    'pepper',
    'person',
    'pie',
    'pig',
    'rabbit',
    'rain',
    'rat',
    'river',
    'robe',
    'rock',
    'root',
    'salt',
    'sand',
    'seed',
    'sibling',
    'sister',
    'skin',
    'sky',
    'smoke',
    'snake',
    'soup',
    'star',
    'stew',
    'stomach',
    'stone',
    'stream',
    'sun',
    'sword',
    'tail',
    'tavern',
    'thumb',
    'tongue',
    'tooth',
    'tree',
    'truth',
    'uncle',
    'valley',
    'war',
    'water',
    'way',
    'wine',
    'woman',
    'word',
  ];
}

function numbers() {
  return ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
}

function pronouns() {
  return ['he', 'she', 'they', 'you', 'we', 'I'];
}
