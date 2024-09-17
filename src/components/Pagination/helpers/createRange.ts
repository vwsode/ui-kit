/**
 * Creates an array of numbers within a specified range.
 *
 * This function generates an array containing all the numbers between
 * `start` and `end`, inclusive of both `start` and `end`.
 *
 * @param {number} start - The starting number of the range.
 * @param {number} end - The ending number of the range.
 * @returns {number[]} - An array of numbers from `start` to `end` (inclusive).
 */
export const createRange = (start: number, end: number): number[] => {
  const length: number = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};
