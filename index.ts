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
