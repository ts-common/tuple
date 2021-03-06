export interface Tuple0 extends Iterable<never> {
    readonly length: 0
}

export const tuple0: Tuple0 = [] as Tuple0

export interface Tuple1<T> extends Iterable<T> {
    readonly length: 1
    readonly [0]: T
}

export const tuple1 = <T>(v: T): Tuple1<T> => [v]

export interface Tuple2<T0, T1> extends Iterable<T0 | T1> {
    readonly length: 2
    readonly [0]: T0
    readonly [1]: T1
}

export const tuple2 = <T0, T1>(v0: T0, v1: T1): Tuple2<T0, T1> => [v0, v1]

export interface Tuple3<T0, T1, T2> extends Iterable<T0 | T1 | T2> {
    readonly length: 3
    readonly [0]: T0
    readonly [1]: T1
    readonly [2]: T2
}

export const tuple3 = <T0, T1, T2>(v0: T0, v1: T1, v2: T2): Tuple3<T0, T1, T2> => [v0, v1, v2]

// For example ["null", "string", "boolean", "integer"]
export interface Tuple4<T0, T1, T2, T3> extends Iterable<T0 | T1 | T2 | T3> {
    readonly length: 4
    readonly [0]: T0
    readonly [1]: T1
    readonly [2]: T2
    readonly [3]: T3
}

export const tuple4 = <T0, T1, T2, T3>(v0: T0, v1: T1, v2: T2, v3: T3): Tuple4<T0, T1, T2, T3> =>
    [v0, v1, v2, v3]

// For example ["null", "string", "boolean", "integer", "number"]
export interface Tuple5<T0, T1, T2, T3, T4> extends Iterable<T0 | T1 | T2 | T3 | T4> {
    readonly length: 5
    readonly [0]: T0
    readonly [1]: T1
    readonly [2]: T2
    readonly [3]: T3
    readonly [4]: T4
}

export const tuple5 = <T0, T1, T2, T3, T4>(
    v0: T0, v1: T1, v2: T2, v3: T3, v4: T4
): Tuple5<T0, T1, T2, T3, T4> =>
    [v0, v1, v2, v3, v4]

// For example ["null", "string", "boolean", "integer", "number", "array"]
export interface Tuple6<T0, T1, T2, T3, T4, T5> extends Iterable<T0 | T1 | T2 | T3 | T4 | T5> {
    readonly length: 6
    readonly [0]: T0
    readonly [1]: T1
    readonly [2]: T2
    readonly [3]: T3
    readonly [4]: T4
    readonly [5]: T5
}

export const tuple6 = <T0, T1, T2, T3, T4, T5>(
    v0: T0, v1: T1, v2: T2, v3: T3, v4: T4, v5: T5
): Tuple6<T0, T1, T2, T3, T4, T5> =>
    [v0, v1, v2, v3, v4, v5]

// For example ["null", "string", "boolean", "integer", "number", "array", "object"]
export interface Tuple7<T0, T1, T2, T3, T4, T5, T6> extends
    Iterable<T0 | T1 | T2 | T3 | T4 | T5 | T6>
{
    readonly length: 7
    readonly [0]: T0
    readonly [1]: T1
    readonly [2]: T2
    readonly [3]: T3
    readonly [4]: T4
    readonly [5]: T5
    readonly [6]: T6
}

export const tuple7 = <T0, T1, T2, T3, T4, T5, T6>(
    v0: T0, v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6
): Tuple7<T0, T1, T2, T3, T4, T5, T6> =>
    [v0, v1, v2, v3, v4, v5, v6]

export type Tuples<T> =
    Tuple0 |
    Tuple1<T> |
    Tuple2<T, T> |
    Tuple3<T, T, T> |
    Tuple4<T, T, T, T> |
    Tuple5<T, T, T, T, T> |
    Tuple6<T, T, T, T, T, T> |
    Tuple7<T, T, T, T, T, T, T>
