import { Hono } from "hono";
import { logger } from "hono/logger";
import { getNames } from "./fantasy_names.js";

const app = new Hono();
app.use(logger());

app.get("/", (c) =>
  c.text(
    "This is MUNA. It takes the form /race/:race_name/:name_type/:count. Use it like /race/elf/female/10. The following races are available: dragonborn, dwarf, elf, gnome, goblin, halfling, halfelf, halforc, human, orc, tiefling, troll. The following name types are available: male, female, family, given, region, town.",
  ));

app.get("/race/:race/:nameType/:count", (c) => {
  const { race, nameType, count } = c.req.param();

  const names = getNames(race, nameType, parseInt(count));
  return c.json(names);
});

export default app;
