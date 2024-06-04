const p: Promise<void> = Promise.resolve();

/**
 * Returns a fulfilled promise.
 */
export const tick = (): Promise<void> => p;

export default tick;
