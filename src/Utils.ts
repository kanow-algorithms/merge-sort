export function isEvenNumber(value: number): boolean {
    return value % 2 === 0;
}

export function shellCopy<T>(value: T): T {
    return JSON.parse(JSON.stringify(value));
}

export function isEmpty<T>(value: T[]): boolean {
    return value.length === 0;
}

export function isNullOrUndefined<T>(x: T): boolean {
    if (x === undefined) {
        return true;
    }
    return x === null;
}
