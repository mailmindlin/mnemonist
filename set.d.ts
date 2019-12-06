/**
 * Mnemonist Set Typings
 * ======================
 */
export function intersection<T>(...set: Array<ReadonlySet<T>>): Set<T>;
export function union<T>(...set: Array<ReadonlySet<T>>): Set<T>;
export function difference<T>(a: ReadonlySet<T>, b: ReadonlySet<T>): Set<T>;
export function symmetricDifference<T>(a: ReadonlySet<T>, b: ReadonlySet<T>): Set<T>;
export function isSubset<T>(a: ReadonlySet<T>, b: ReadonlySet<T>): boolean;
export function isSuperset<T>(a: ReadonlySet<T>, b: ReadonlySet<T>): boolean;
export function add<T>(a: Set<T>, b: ReadonlySet<T>): void;
export function subtract<T>(a: Set<T>, b: ReadonlySet<T>): void;
export function intersect<T>(a: Set<T>, b: ReadonlySet<T>): void;
export function disjunct<T>(a: Set<T>, b: ReadonlySet<T>): void;
