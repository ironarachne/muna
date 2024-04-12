import * as MUN from "@ironarachne/made-up-names";
import { AutoRouter } from "itty-router";
import NameResponse from "./name_response.js";

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

const router = AutoRouter();

router.get("/", () => {
  return {
    message:
      "This is MUNA. Use it like /race/elf/female/10. The following races are available: dragonborn, dwarf, elf, gnome, goblin, halfling, halfelf, halforc, human, orc, tiefling, troll.",
  };
});

router.get("/race/:race/:nameType/:count", ({ race, nameType, count }) => {
  return getNames(race, nameType, count);
});

export default { ...router };

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
  let result: NameResponse = {
    count: count,
    names: [],
  };

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
