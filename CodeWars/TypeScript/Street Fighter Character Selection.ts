//given array of fighters, starting position, and array of moves, return array of fighters the cursor hovers over
export function streetFighterSelection(
  fighters: Array<string[]>,
  position: number[],
  moves: string[]
) {
  let v = position[0];
  let h = position[1];
  const selections = [];
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    if (move === "down") {
      if (v === 0) v = 1;
      selections.push(fighters[v][h]);
    }
    if (move === "up") {
      if (v === 1) v = 0;
      selections.push(fighters[v][h]);
    }
    if (move === "left") {
      h--;
      if (h < 0) h = 5;
      selections.push(fighters[v][h]);
    }
    if (move === "right") {
      h++;
      if (h > 5) h = 0;
      selections.push(fighters[v][h]);
    }
  }
  return selections;
}
