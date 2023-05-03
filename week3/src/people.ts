import { Person } from "./person";
import { data } from "./data";

export function getPeople(): Promise<Person[]> {
    return new Promise((resolve) => {
        const people: Person[] = data.map(
            ({ name, age, occupation,}) =>
                new Person(name, age, occupation)
        );
        resolve(people);
    });
}
