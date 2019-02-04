import "mocha"
import * as tuple from "./index"
import * as assert from "assert"

const fm = <T>(_: Iterable<T>, _a: (v: T) => void) => {}

describe("main test", () => {
    it("tuple2", () => {
        const x = tuple.tuple2(2, "a")
        const [a, b] = x
        const _ma: number = a
        assert.strictEqual(_ma, 2)
        const _mb: string = b
        assert.strictEqual(_mb, "a")
    })
    it("array of tuple2", () => {
        const x = [tuple.tuple2(2, "a")]
        fm(x, ([a, b]) => {
            const _a: number = a
            assert.strictEqual(_a, 2)
            const _b: string = b
            assert.strictEqual(_b, "a")
        })
    })
})
