export function randomIntArrayInRange(min, max, n = 1) {
  return Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}
