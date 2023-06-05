export function generateArray<T> (
  length: number,
  filler?: ((number: number) => T) | T
): T[] | null[] {
  return Array.from({ length }, (_, i) =>
    filler
      ? typeof filler === 'function'
        ? (filler as (number: number) => T)(i)
        : filler
      : null
  );
}
