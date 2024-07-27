/**
 * Composes a testing path by joining non-empty string arguments with a dot.
 *
 * @param {...(string | undefined)} args - The string arguments to be joined.
 * @returns {string} The composed testing path.
 */
export const composeTestingPath = (...args: Array<string | undefined>): string =>
  [...args].filter((item) => Boolean(item)).join('.');
