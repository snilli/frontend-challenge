export interface AnyAction<T extends string, E> {
	type: T
	payload: E
}
