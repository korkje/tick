# tick [![JSR](https://jsr.io/badges/@korkje/tick)](https://jsr.io/@korkje/tick)

Get a fulfilled promise, essentially a shorthand for `Promise.resolve()`. Useful for e.g. running loops that don't block the event loop.

```ts
import tick from "jsr:@korkje/tick";

for (let i = 0; i < 10; ++i) {
    await tick();

    console.log(i);
}
```

Also exports a `ticks` function generator. The above example can be rewritten as:

```ts
import { ticks } from "jsr:@korkje/tick";

for await (const _ of ticks(10)) {
    console.log(_); // _ is 'undefined'
}

// or, if you want the loop index:
for await (const i of ticks(10, { index: true })) {
    console.log(i);
}
```

`ticks` can also be used to create an infinite loop:

```ts
import { ticks } from "jsr:@korkje/tick";

for await (const _ of ticks()) {
    console.log("tick");
}
```
