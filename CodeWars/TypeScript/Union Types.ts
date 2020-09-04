export function join(tokens: string | string[], glue?: string): string {
  if (typeof tokens === "string") return tokens + (glue || "");
  return tokens.join(glue);
}
