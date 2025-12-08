import * as MUN from "@ironarachne/made-up-names";
import * as RNG from "@ironarachne/rng";
import type { NameResponse } from "./name_response.js";

export function getNames(
  race: string,
  nameType: string,
  count: number,
): NameResponse {
  if (count < 1) {
    throw new Error(`invalid count: ${count}`);
  }

  const availablePatterns = MUN.getSupportedClassicRaceNamePatternSets();

  let result: NameResponse = {
    count: count,
    names: [],
  };

  const patternSet = MUN.getClassicRaceNamePatternSet(race);
  if (!patternSet) {
    throw new Error(`unknown race: ${race}`);
  }

  let patterns: string[] | MUN.PatternSet = [];

  if (nameType == "country" || nameType == "region") {
    patterns = patternSet.country;
  } else if (nameType == "culture") {
    patterns = patternSet.culture;
  } else if (nameType == "family") {
    patterns = patternSet.family;
  } else if (nameType == "female") {
    patterns = patternSet.female;
  } else if (nameType == "given") {
    patterns = patternSet.male as string[]; // this is goofy and relies on knowing these are string[]
    patterns = patterns.concat(patternSet.female as string[]);
  } else if (nameType == "male") {
    patterns = patternSet.male;
  } else if (nameType == "town") {
    patterns = patternSet.town;
  } else {
    throw new Error(`bad name type: ${nameType}`);
  }

  const generator = MUN.getNameGeneratorForPatternSet(`${nameType}, ${race}`, patterns);
  if (!generator) {
    throw new Error(`no generator for race: ${race}`);
  }

  result.names = generator.generate(count);

  return result;
}

