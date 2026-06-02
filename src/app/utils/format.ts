export function formatObjectNumbers<T extends Record<string, number>>(
  obj: T,
  digits: number = 4,
): T {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      Number(value.toFixed(digits)),
    ]),
  ) as T;
}
