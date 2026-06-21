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

export function formatNumbers(value: number, digits?: number): number;
export function formatNumbers<T extends Record<string, number>>(
  value: T,
  digits?: number,
): T;

export function formatNumbers(
  value: number | Record<string, number>,
  digits = 4,
) {
  if (typeof value === "number") {
    return Number(value.toFixed(digits));
  }

  return Object.fromEntries(
    Object.entries(value).map(([k, v]) => [k, Number(v.toFixed(digits))]),
  );
}
