import { Hono } from "hono";
import { logger } from "hono/logger";
import { getNames } from "./fantasy_names.js";
import * as MUN from "@ironarachne/made-up-names";

const generatorSets: MUN.GeneratorSet[] = MUN.fantasyRaceSets();

const app = new Hono();
app.use(logger());

app.get("/", (c) => {
  const raceNames = generatorSets.map((set) => set.name);

  return c.text(
    `This is MUNA. It takes the form /race/:race_name/:name_type/:count. Use it like /race/elf/female/10. The following races are available: ${raceNames}. The following name types are available: male, female, family, given, region, town.`,
  );
});  

app.get("/race/:race/:nameType/:count", (c) => {
  const { race, nameType, count } = c.req.param();

  const names = getNames(race, nameType, parseInt(count));
  return c.json(names);
});

export default app;
