type ImmutableTuple2 = {
    readonly [0]: number
    readonly [1]: string
} & Iterable<number|string>

/*
const f = ([a, b]: ImmutableTuple2) => {
    const _a: number = a // a should be a `number` but it's `number`|`string` in TS 3.3
    const _b: string = b // b should be a `string` but it's `number`|`string` in TS 3.3
}
*/

const f1 = (ab: ImmutableTuple2) => {
    const [a, b] = ab
    const _a: number = a
    const _b: string = b
}