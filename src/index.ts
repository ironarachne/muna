"use strict";

import 'newrelic';

import * as MUN from "@ironarachne/made-up-names";

import express from "express";
import winston from "winston";

const console = new winston.transports.Console();
winston.add(console);

const app = express();
const port = 3000;
const dragonbornGenSet: MUN.GeneratorSet = new MUN.DragonbornSet();
const dwarfGenSet: MUN.GeneratorSet = new MUN.DwarfSet();
const elfGenSet: MUN.GeneratorSet = new MUN.ElfSet();
const gnomeGenSet: MUN.GeneratorSet = new MUN.GnomeSet();
const goblinGenSet: MUN.GeneratorSet = new MUN.GoblinSet();
const halfElfGenSet: MUN.GeneratorSet = new MUN.HalfElfSet();
const halflingGenSet: MUN.GeneratorSet = new MUN.HalflingSet();
const halfOrcGenSet: MUN.GeneratorSet = new MUN.HalfOrcSet();
const humanGenSet: MUN.GeneratorSet = new MUN.HumanSet();
const orcGenSet: MUN.GeneratorSet = new MUN.OrcSet();
const tieflingGenSet: MUN.GeneratorSet = new MUN.TieflingSet();
const trollGenSet: MUN.GeneratorSet = new MUN.TrollSet();

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
  winston.info(`MUNA is running on port ${port}!`);
});

function getNames(race: string, nameType: string, count: number): NameResponse {
  let sets: Record<string, MUN.GeneratorSet> = {
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

  if (nameType == "male" && genSet.male) {
    result.names = genSet.male.generate(count);
  } else if (nameType == "female" && genSet.female) {
    result.names = genSet.female.generate(count);
  } else if (nameType == "family" && genSet.family) {
    result.names = genSet.family.generate(count);
  } else {
    throw new Error(`bad name type: ${nameType}`);
  }

  return result;
}
