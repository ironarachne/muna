"use strict";

import DragonbornSet from "./modules/names/races/dragonborn";
import DwarfSet from "./modules/names/races/dwarf";
import ElfSet from "./modules/names/races/elf";
import GnomeSet from "./modules/names/races/gnome";
import HalflingSet from "./modules/names/races/halfling";
import HalfElfSet from "./modules/names/races/halfelf";
import HalfOrcSet from "./modules/names/races/halforc";
import HumanSet from "./modules/names/races/human";
import OrcSet from "./modules/names/races/orc";
import TieflingSet from "./modules/names/races/tiefling";
import TrollSet from "./modules/names/races/troll";
import express from "express";
import GeneratorSet from "./modules/names/generatorset";

const app = express();
const port = 3000;
const dragonbornGenSet: GeneratorSet = new DragonbornSet();
const dwarfGenSet: GeneratorSet = new DwarfSet();
const elfGenSet: GeneratorSet = new ElfSet();
const gnomeGenSet: GeneratorSet = new GnomeSet();
const halfElfGenSet: GeneratorSet = new HalfElfSet();
const halflingGenSet: GeneratorSet = new HalflingSet();
const halfOrcGenSet: GeneratorSet = new HalfOrcSet();
const humanGenSet: GeneratorSet = new HumanSet();
const orcGenSet: GeneratorSet = new OrcSet();
const tieflingGenSet: GeneratorSet = new TieflingSet();
const trollGenSet: GeneratorSet = new TrollSet();

class NameResponse {
  count: number;
  names: string[];

  constructor(count: number, names: string[]) {
    this.count = count;
    this.names = names;
  }
}

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("MUNA!");
});

app.get("/dragonborn/", (req: express.Request, res: express.Response) => {
  let count: number = 10;
  if (req.query.count) {
    count = parseInt(req.query.count as string);
  }
  let nameType: string = "male";
  if (req.query.nameType && typeof req.query.nameType === "string") {
    nameType = req.query.nameType;
  }
  let response = getNames("dragonborn", nameType, count);
  res.send(response);
});

app.get("/dwarf/", (req: express.Request, res: express.Response) => {
  let count: number = 10;
  if (req.query.count) {
    count = parseInt(req.query.count as string);
  }
  let nameType: string = "male";
  if (req.query.nameType && typeof req.query.nameType === "string") {
    nameType = req.query.nameType;
  }
  let response = getNames("dwarf", nameType, count);
  res.send(response);
});

app.get("/elf/", (req: express.Request, res: express.Response) => {
  let count: number = 10;
  if (req.query.count) {
    count = parseInt(req.query.count as string);
  }
  let nameType: string = "male";
  if (req.query.nameType && typeof req.query.nameType === "string") {
    nameType = req.query.nameType;
  }
  let response = getNames("elf", nameType, count);
  res.send(response);
});

app.get("/gnome/", (req: express.Request, res: express.Response) => {
  let count: number = 10;
  if (req.query.count) {
    count = parseInt(req.query.count as string);
  }
  let nameType: string = "male";
  if (req.query.nameType && typeof req.query.nameType === "string") {
    nameType = req.query.nameType;
  }
  let response = getNames("gnome", nameType, count);
  res.send(response);
});

app.get("/halfling/", (req: express.Request, res: express.Response) => {
  let count: number = 10;
  if (req.query.count) {
    count = parseInt(req.query.count as string);
  }
  let nameType: string = "male";
  if (req.query.nameType && typeof req.query.nameType === "string") {
    nameType = req.query.nameType;
  }
  let response = getNames("halfling", nameType, count);
  res.send(response);
});

app.get("/halfelf/", (req: express.Request, res: express.Response) => {
  let count: number = 10;
  if (req.query.count) {
    count = parseInt(req.query.count as string);
  }
  let nameType: string = "male";
  if (req.query.nameType && typeof req.query.nameType === "string") {
    nameType = req.query.nameType;
  }
  let response = getNames("halfelf", nameType, count);
  res.send(response);
});

app.get("/halforc/", (req: express.Request, res: express.Response) => {
  let count: number = 10;
  if (req.query.count) {
    count = parseInt(req.query.count as string);
  }
  let nameType: string = "male";
  if (req.query.nameType && typeof req.query.nameType === "string") {
    nameType = req.query.nameType;
  }
  let response = getNames("halforc", nameType, count);
  res.send(response);
});

app.get("/human/", (req: express.Request, res: express.Response) => {
  let count: number = 10;
  if (req.query.count) {
    count = parseInt(req.query.count as string);
  }
  let nameType: string = "male";
  if (req.query.nameType && typeof req.query.nameType === "string") {
    nameType = req.query.nameType;
  }
  let response = getNames("human", nameType, count);
  res.send(response);
});

app.get("/orc/", (req: express.Request, res: express.Response) => {
  let count: number = 10;
  if (req.query.count) {
    count = parseInt(req.query.count as string);
  }
  let nameType: string = "male";
  if (req.query.nameType && typeof req.query.nameType === "string") {
    nameType = req.query.nameType;
  }
  let response = getNames("orc", nameType, count);
  res.send(response);
});

app.get("/tiefling/", (req: express.Request, res: express.Response) => {
  let count: number = 10;
  if (req.query.count) {
    count = parseInt(req.query.count as string);
  }
  let nameType: string = "male";
  if (req.query.nameType && typeof req.query.nameType === "string") {
    nameType = req.query.nameType;
  }
  let response = getNames("tiefling", nameType, count);
  res.send(response);
});

app.get("/troll/", (req: express.Request, res: express.Response) => {
  let count: number = 10;
  if (req.query.count) {
    count = parseInt(req.query.count as string);
  }
  let nameType: string = "male";
  if (req.query.nameType && typeof req.query.nameType === "string") {
    nameType = req.query.nameType;
  }
  let response = getNames("troll", nameType, count);
  res.send(response);
});

app.listen(port, () => {
  console.log(`MUNA listening on port ${port}`);
});

function getNames(race: string, nameType: string, count: number): NameResponse {
  let sets: Record<string, GeneratorSet> = {
    dragonborn: dragonbornGenSet,
    dwarf: dwarfGenSet,
    elf: elfGenSet,
    gnome: gnomeGenSet,
    halfling: halflingGenSet,
    halfelf: halfElfGenSet,
    halforc: halfOrcGenSet,
    human: humanGenSet,
    orc: orcGenSet,
    tiefling: tieflingGenSet,
    troll: trollGenSet,
  };

  let genSet = sets[race];
  let result = new NameResponse(count, []);

  if (nameType == "male") {
    result.names = genSet.male.generate(count);
  } else if (nameType == "female") {
    result.names = genSet.female.generate(count);
  } else if (nameType == "family") {
    result.names = genSet.family.generate(count);
  }

  return result;
}
