import { LinkedListEntry } from "./linked-list-entry.class";

export interface LinkedList<T> {
	addFirst(entry: T): void;
	addLast(entry: T): void;
	addAll(entry: T[]): boolean;
	addAll(index: number, entry: T[]): boolean;
	add(entry: T): boolean;
	add(index: number, entry: T): boolean;

	removeFirst(): LinkedListEntry<T>;
	removeLast(): LinkedListEntry<T>;
	remove(entry: T): boolean;
	remove(): LinkedListEntry<T>;
	removeFirstOccurrence(entry: T): boolean;
	removeLastOccurrence(entry: T): boolean;

	getFirst(): LinkedListEntry<T>;
	getLast(): LinkedListEntry<T>;
	get(index: number): LinkedListEntry<T>;

	peak(): LinkedListEntry<T>;
	peekFirst(): LinkedListEntry<T> | null;
	peakLast(): LinkedListEntry<T> | null;
	poll(): LinkedListEntry<T>;
	peekLast(): LinkedListEntry<T>;
	peekFirst(): LinkedListEntry<T>;
	element(): LinkedListEntry<T>;

	push(entry: T): void;
	pop(): LinkedListEntry<T>;
	set(index: number, entry: T): void;
	clear(): void;
	size(): number;

	listIterator(): Iterator<LinkedListEntry<T>>;
	descendingIterator(): Iterator<LinkedListEntry<T>>;
	toArray(): T[];
	clone(): LinkedList<T>;

	indexOf(entry: T): number;
	listIndexOf(entry: T): number;
	offer(entry: T): boolean;
	offerFirst(entry: T): boolean;
	offerLast(entry: T): boolean;
}
