//given a petal falling at 5cm/s takes 80s to land, find time it takes petal falling at (v)cm/s to land
export function sakuraFall(v: number): number {
  if (v <= 0) return 0;
  return 400 / v;
}
