"use strict";

import NameGenerator from "../generator";
import GenericNameGenerator from "../generators/generic";
import GeneratorSet from "../generatorset";

export default class HumanSet extends GeneratorSet {
  constructor() {
    super();
    this.family = family();
    this.female = female();
    this.male = male();
  }
}

function family(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    "Apvlnvn",
    "vpvcnvn",
    "vSHlvnp",
    "SnvTH",
    "pvvLOR",
    "pv+PER",
    "sLvTCHER",
    "svRRIER",
    "pvnDElSON",
    "pvnDElS",
    "vvpSBURG",
    "vvpSBERG",
    "vlnvTHION",
    "vpRvHAM",
    "vcpLAND",
    "vcpLvND",
    "vcfFORD",
    "vcnFvRD",
  ];

  return gen;
}

function female(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    "(C,K)A(TH,T)L(EEN,IN,EENA,INA)",
    "(J,K)(A,E)(SS,LL,L)A(M,N)INA",
    "(C,K)A(R,L,LL)A",
    "(B,L)O(N,NN)(IE,Y)",
    "B(E,I)(L,LL)A",
    "(AUTUMN,RIVER,SUMMER,WINTER,SKY,HARPER,OAK,APPLE,WILLOW)",
    "(D,J,L,N)O(N,NN)A",
    "(S,K,C)A(L,LL)(IE,Y)",
    "A(L,LL)(IE,Y)",
    "SA(R,RR)(A,AH,INA,I)",
    "AL(O,I)(N,NN)A",
    "(S,C)Y(L,LL,LV)(A,INA)",
    "J(A,E,AE)(NN,N,S,SS)I(C,K)A",
    "S(A,O)(FF,F,PH)IA",
  ];

  return gen;
}

function male(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    "(T,D)(A,O),(M,N)",
    "(AE,E)DM(O,U)ND",
    "(B,G)(A,O)(R,RR)IS",
    "AN(T,D)O(N,NN)(Y,IUS)",
    "(B,G)AR(T,TH,TLE,DLE,D)",
    "(WILLIAM,BILL,BILLIUS,BILLY,WILLY)",
    "(B,G,W)(I,O)(L,LL)FR(IE,E)D",
    "(T,TH)O(M,N)A(S,THY)",
    "x(R,L)(A,E,m)(NON,N,M)",
    "(B,W)(O,U)L(M,N)A(R,RD)",
    "(G,B,D)vDRv(C,K)",
    "(G,B)(A,E)RI(C,K,CH)",
    "BEOR(N,IM,IN)",
    "W(A,O)L(D,T)(A,E)R",
    "H(U,UE)(G,GH)O",
    "FR(A,m)N(C,K,KLIN)",
    "MI(CH,KK,CK,K)(AE,E)L",
    "(C,K)(O,x)(NN,N)OR",
  ];

  return gen;
}
