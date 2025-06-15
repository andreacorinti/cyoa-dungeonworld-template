export function roll2d6(modifier = 0): { total: number; rolls: number[] } {
  const die1 = Math.floor(Math.random() * 6) + 1;
  const die2 = Math.floor(Math.random() * 6) + 1;
  const total = die1 + die2 + modifier;

  return {
    total,
    rolls: [die1, die2]
  };
}
