"use strict";

import NameGenerator from "../generator";
import GenericNameGenerator from "../generators/generic";
import GeneratorSet from "../generatorset";

export default class HalflingSet extends GeneratorSet {
  constructor() {
    super();
    this.family = family();
    this.female = female();
    this.male = male();
  }
}

function family(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ["BvdvnS", "pvMpu"];

  const prefixes = [
    "BRANDY",
    "FEATHER",
    "HAIRY",
    "HOG",
    "HORN",
    "LITTLE",
    "LONG",
    "OAK",
    "OLD",
    "PROUD",
    "PUDDI",
    "SWIFT",
    "UNDER",
    "WANDER",
    "WHIT",
  ];

  const suffixes = [
    "BELLY",
    "BOTTOM",
    "DALE",
    "FOOT",
    "HOUSE",
    "PEN",
    "WOOD",
    "WO(R,L)(T,D)",
    "F(O,E)RD",
    "WALD",
  ];

  for (let i = 0; i < prefixes.length; i++) {
    for (let j = 0; j < suffixes.length; j++) {
      gen.patterns.push(prefixes[i] + suffixes[j]);
    }
  }

  return gen;
}

function female(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    "oEOnY",
    "A(N,NN)A",
    "(PEARL,OPAL,AMBER,RUBY)",
    "CA(M,N)(A,E)LL(A,IA)",
    "(M,B)(A,E)L(I,O)NDA",
    "MmlvnoA",
    "plvSov(M,N)(A,I)",
    "(M,N)(E,O)lISSA",
    "M(A,E)l(O,I)(D,DR)v(R,L)(A,I)",
    "pvfvnA",
    "(B,G)(A,E)LL(A,E,O)(D,G)(O,I)NA",
    "e(A,O)(M,L,S)INA",
    "(TOM,AN,AM)A(S,L)INA",
  ];

  return gen;
}

function male(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    "(BILL,WILL,WILLIAM,WILLARD)",
    "Bvl(B,G)(O,I)",
    "Sv(M,N)wmSE",
    "pvPPvn",
    "pvlvplvn",
    "wvnflvo",
    "pvlnO",
    "vovlpvRT",
    "cv(l,n)(B,G)(A,E)RT",
    "(TH,T)EO(D,G)(RE,RA,AR,ER)D",
    "(TH,T)OMAS",
  ];

  return gen;
}
