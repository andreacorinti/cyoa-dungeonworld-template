export type CharacterClass = {
  name: string;
  description: string;
  stats: Record<string, number>;
};

export const characterClasses: Record<string, CharacterClass> = {
  hacker: {
    name: "Occhialino",
    description: "Specializzato in informatica e indagini digitali.",
    stats: {
      sharp: 2,
      cool: 1,
      hard: 0,
      hot: 0,
      weird: 0
    }
  },
  detective: {
    name: "Investigatore",
    description: "Esperto di misteri e segreti nascosti.",
    stats: {
      sharp: 1,
      cool: 2,
      hard: 0,
      hot: 1,
      weird: 0
    }
  }
};
