import tick from "lib/tick.ts";

/**
 * Returns an async generator that yields numbers starting from 0 at each tick.
 */
export async function* ticks(n: number = Infinity): AsyncGenerator<number> {
    for (let i = 0; i < n; ++i) {
        await tick();
        yield i;
    }
};
