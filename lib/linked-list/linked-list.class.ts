import {LinkedList as ILinkedList} from "./linked-list.interface";
import {LinkedListEntry} from "./linked-list-entry.class";

export class LinkedList<T> implements ILinkedList<T>{
	add(entry: T): boolean;
	add(index: number, entry: T): boolean;
	add(entry: T | number, entry?: T): boolean {
		return false;
	}

	addAll(entry: T[]): boolean;
	addAll(index: number, entry: T[]): boolean;
	addAll(entry: T[] | number, entry?: T[]): boolean {
		return false;
	}

	addFirst(entry: T): void {
	}

	addLast(entry: T): void {
	}

	clear(): void {
	}

	clone(): LinkedList<T> {
		return undefined;
	}

	descendingIterator(): Iterator<LinkedListEntry<T>> {
		return undefined;
	}

	element(): LinkedListEntry<T> {
		return undefined;
	}

	get(index: number): LinkedListEntry<T> {
		return undefined;
	}

	getFirst(): LinkedListEntry<T> {
		return undefined;
	}

	getLast(): LinkedListEntry<T> {
		return undefined;
	}

	indexOf(entry: T): number {
		return 0;
	}

	listIndexOf(entry: T): number {
		return 0;
	}

	listIterator(): Iterator<LinkedListEntry<T>> {
		return undefined;
	}

	offer(entry: T): boolean {
		return false;
	}

	offerFirst(entry: T): boolean {
		return false;
	}

	offerLast(entry: T): boolean {
		return false;
	}

	peak(): LinkedListEntry<T> {
		return undefined;
	}

	peakLast(): LinkedListEntry<T> | null {
		return undefined;
	}

	peekFirst(): LinkedListEntry<T> | null;
	peekFirst(): LinkedListEntry<T>;
	peekFirst(): any {
	}

	peekLast(): LinkedListEntry<T> {
		return undefined;
	}

	poll(): LinkedListEntry<T> {
		return undefined;
	}

	pop(): LinkedListEntry<T> {
		return undefined;
	}

	push(entry: T): void {
	}

	remove(entry: T): boolean;
	remove(): LinkedListEntry<T>;
	remove(entry?: T): any {
	}

	removeFirst(): LinkedListEntry<T> {
		return undefined;
	}

	removeFirstOccurrence(entry: T): boolean {
		return false;
	}

	removeLast(): LinkedListEntry<T> {
		return undefined;
	}

	removeLastOccurrence(entry: T): boolean {
		return false;
	}

	set(index: number, entry: T): void {
	}

	size(): number {
		return 0;
	}

	toArray(): T[] {
		return [];
	}

}
