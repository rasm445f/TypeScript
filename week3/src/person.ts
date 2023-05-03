export class Person {
    name: string;
    age: number;
    occupation: string;
    salary: number = 0;

    constructor(name: string, age: number, occupation: string) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    introduce(): string {
        return `Hello, my name is ${this.name} and I am a ${this.occupation}. I earn ${this.salary}$`;
    }

    incrementAge(): void {
        this.age++;
    }

    setSalary(salary: number): void {
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary;
    }
}
