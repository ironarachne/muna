"use strict";

export default abstract class NameGenerator {
  name: string;
  patterns: string[];

  generate: (numberOfNames: number) => string[];

  constructor(
    name: string,
    patterns: string[],
    generate: (numberOfNames: number) => string[]
  ) {
    this.name = name;
    this.patterns = patterns;
    this.generate = generate;
  }
}
