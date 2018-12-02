export type Tuple0 = ReadonlyArray<never>

export const tuple0: Tuple0 = []

export interface Tuple1<T> extends Iterable<T> {
    readonly [0]: T
    readonly [1]?: never
}

export const tuple1 = <T>(v: T): Tuple1<T> => [v]

export interface Tuple2<T0, T1> extends Iterable<T0 | T1> {
    readonly [0]: T0
    readonly [1]: T1
    readonly [2]?: never
}

export const tuple2 = <T0, T1>(v0: T0, v1: T1): Tuple2<T0, T1> => [v0, v1]

export interface Tuple3<T0, T1, T2> extends Iterable<T0 | T1 | T2> {
    readonly [0]: T0
    readonly [1]: T1
    readonly [2]: T2
    readonly [3]?: never
}

export const tuple3 = <T0, T1, T2>(v0: T0, v1: T1, v2: T2): Tuple3<T0, T1, T2> => [v0, v1, v2]

// For example ["null", "string", "boolean", "integer"]
export interface Tuple4<T0, T1, T2, T3> extends Iterable<T0 | T1 | T2 | T3> {
    readonly [0]: T0
    readonly [1]: T1
    readonly [2]: T2
    readonly [3]: T3
    readonly [4]?: never
}

export const tuple4 = <T0, T1, T2, T3>(v0: T0, v1: T1, v2: T2, v3: T3): Tuple4<T0, T1, T2, T3> =>
    [v0, v1, v2, v3]

// For example ["null", "string", "boolean", "integer", "number"]
export interface Tuple5<T0, T1, T2, T3, T4> extends Iterable<T0 | T1 | T2 | T3 | T4> {
    readonly [0]: T0
    readonly [1]: T1
    readonly [2]: T2
    readonly [3]: T3
    readonly [4]: T4
    readonly [5]?: never
}

export const tuple5 = <T0, T1, T2, T3, T4>(
    v0: T0, v1: T1, v2: T2, v3: T3, v4: T4
): Tuple5<T0, T1, T2, T3, T4> =>
    [v0, v1, v2, v3, v4]

// For example ["null", "string", "boolean", "integer", "number", "array"]
export interface Tuple6<T0, T1, T2, T3, T4, T5> extends Iterable<T0 | T1 | T2 | T3 | T4 | T5> {
    readonly [0]: T0
    readonly [1]: T1
    readonly [2]: T2
    readonly [3]: T3
    readonly [4]: T4
    readonly [5]: T5
    readonly [6]?: never
}

export const tuple6 = <T0, T1, T2, T3, T4, T5>(
    v0: T0, v1: T1, v2: T2, v3: T3, v4: T4, v5: T5
): Tuple6<T0, T1, T2, T3, T4, T5> =>
    [v0, v1, v2, v3, v4, v5]

// For example ["null", "string", "boolean", "integer", "number", "array", "object"]
export interface Tuple7<T0, T1, T2, T3, T4, T5, T6> extends
    Iterable<T0 | T1 | T2 | T3 | T4 | T5 | T6>
{
    readonly [0]: T0
    readonly [1]: T1
    readonly [2]: T2
    readonly [3]: T3
    readonly [4]: T4
    readonly [5]: T5
    readonly [6]: T6
    readonly [7]?: never
}

export const tuple7 = <T0, T1, T2, T3, T4, T5, T6>(
    v0: T0, v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6
): Tuple7<T0, T1, T2, T3, T4, T5, T6> =>
    [v0, v1, v2, v3, v4, v5, v6]
