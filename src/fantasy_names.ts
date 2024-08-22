import * as MUN from "@ironarachne/made-up-names";
import NameResponse from "./name_response.js";

const generatorSets: MUN.GeneratorSet[] = MUN.fantasyRaceSets();

export function getNames(
  race: string,
  nameType: string,
  count: number,
): NameResponse {
  if (count < 1) {
    throw new Error(`invalid count: ${count}`);
  }

  let genSet = MUN.getSetByName(race, generatorSets);
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
  } else if (nameType == "given" && genSet.male && genSet.female) {
    let femaleNames = genSet.female.generate(Math.floor(count / 2));
    let maleNames = genSet.male.generate(count - femaleNames.length);
    result.names = femaleNames.concat(maleNames);
    shuffle(result.names);
  } else if (nameType == "region" && genSet.country) {
    result.names = genSet.country.generate(count);
  } else if (nameType == "town" && genSet.town) {
    result.names = genSet.town.generate(count);
  } else if (nameType == "culture" && genSet.culture) {
    result.names = genSet.culture.generate(count);
  } else {
    throw new Error(`bad name type: ${nameType}`);
  }

  return result;
}

function shuffle(array: any[]) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}
