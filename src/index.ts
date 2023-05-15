"use strict";

import DragonbornSet from "./modules/names/races/dragonborn";
import DwarfSet from "./modules/names/races/dwarf";
import ElfSet from "./modules/names/races/elf";
import GnomeSet from "./modules/names/races/gnome";
import GoblinSet from "./modules/names/races/goblin";
import HalfElfSet from "./modules/names/races/halfelf";
import HalflingSet from "./modules/names/races/halfling";
import HalfOrcSet from "./modules/names/races/halforc";
import HumanSet from "./modules/names/races/human";
import OrcSet from "./modules/names/races/orc";
import TieflingSet from "./modules/names/races/tiefling";
import TrollSet from "./modules/names/races/troll";

import express from "express";
import GeneratorSet from "./modules/names/generatorset";

const winston = require("winston");
const console = new winston.transports.Console();
winston.add(console);

const app = express();
const port = 3000;
const dragonbornGenSet: GeneratorSet = new DragonbornSet();
const dwarfGenSet: GeneratorSet = new DwarfSet();
const elfGenSet: GeneratorSet = new ElfSet();
const gnomeGenSet: GeneratorSet = new GnomeSet();
const goblinGenSet: GeneratorSet = new GoblinSet();
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

function handleNames(
  raceName: string,
  req: express.Request,
  res: express.Response
) {
  let count: number = 10;
  if (req.query.count) {
    count = parseInt(req.query.count as string);
  }
  let nameType: string = "male";
  if (req.query.nameType && typeof req.query.nameType === "string") {
    nameType = req.query.nameType;
  }
  let response;
  try {
    response = getNames(raceName, nameType, count);
  } catch (err) {
    winston.error(`ERROR: /${raceName}/ ${nameType} ${count}`);
    res.sendStatus(500);
  }
  winston.info(`/${raceName}/ ${nameType} ${count}`);
  res.send(response);
}

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("MUNA!");
});

app.get("/dragonborn/", (req: express.Request, res: express.Response) => {
  handleNames("dragonborn", req, res);
});

app.get("/dwarf/", (req: express.Request, res: express.Response) => {
  handleNames("dwarf", req, res);
});

app.get("/elf/", (req: express.Request, res: express.Response) => {
  handleNames("elf", req, res);
});

app.get("/gnome/", (req: express.Request, res: express.Response) => {
  handleNames("gnome", req, res);
});

app.get("/goblin/", (req: express.Request, res: express.Response) => {
  handleNames("goblin", req, res);
});

app.get("/halfling/", (req: express.Request, res: express.Response) => {
  handleNames("halfling", req, res);
});

app.get("/halfelf/", (req: express.Request, res: express.Response) => {
  handleNames("halfelf", req, res);
});

app.get("/halforc/", (req: express.Request, res: express.Response) => {
  handleNames("halforc", req, res);
});

app.get("/human/", (req: express.Request, res: express.Response) => {
  handleNames("human", req, res);
});

app.get("/orc/", (req: express.Request, res: express.Response) => {
  handleNames("orc", req, res);
});

app.get("/tiefling/", (req: express.Request, res: express.Response) => {
  handleNames("tiefling", req, res);
});

app.get("/troll/", (req: express.Request, res: express.Response) => {
  handleNames("troll", req, res);
});

app.listen(port, () => {
  winston.info("MUNA is running");
});

function getNames(race: string, nameType: string, count: number): NameResponse {
  let sets: Record<string, GeneratorSet> = {
    dragonborn: dragonbornGenSet,
    dwarf: dwarfGenSet,
    elf: elfGenSet,
    gnome: gnomeGenSet,
    goblin: goblinGenSet,
    halfling: halflingGenSet,
    halfelf: halfElfGenSet,
    halforc: halfOrcGenSet,
    human: humanGenSet,
    orc: orcGenSet,
    tiefling: tieflingGenSet,
    troll: trollGenSet,
  };

  if (count < 1) {
    throw new Error(`invalid count: ${count}`);
  }

  let genSet = sets[race];
  let result = new NameResponse(count, []);

  if (nameType == "male") {
    result.names = genSet.male.generate(count);
  } else if (nameType == "female") {
    result.names = genSet.female.generate(count);
  } else if (nameType == "family") {
    result.names = genSet.family.generate(count);
  } else {
    throw new Error(`bad name type: ${nameType}`);
  }

  return result;
}
