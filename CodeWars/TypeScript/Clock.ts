// Convert hours, minutes, seconds to milliseconds
export function past(h: number, m: number, s: number): number {
  return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
}
