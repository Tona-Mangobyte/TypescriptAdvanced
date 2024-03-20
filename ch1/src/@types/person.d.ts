// An interface for objects of this shape
export interface Person {
    name: string;
    age: number;
}

// An interface that extends the original one
// this is tough to write with JSDoc comments alone.
export interface Student extends Person {
    semester: number;
}
