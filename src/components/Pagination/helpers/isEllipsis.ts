import { ELLIPSIS_SYMBOL } from '../components/Ellipsis';

/**
 * Checks if the given value value is an ellipsis symbol.
 *
 * This function compares the input `value` to the `ELLIPSIS_SYMBOL` constant and returns `true`
 * if they are equal, and `false` otherwise.
 *
 * @template T - The type of the input value.
 * @param {T} value - The value to check, which can be of any type.
 * @returns {boolean} - Returns `true` if `value` is equal to `ELLIPSIS_SYMBOL`, otherwise returns `false`.
 */
export const isEllipsis = <T>(value: T): boolean => {
  return value === ELLIPSIS_SYMBOL;
};
