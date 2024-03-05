
export interface IProvider<T> {
    provide(): Iterable<T>
}
