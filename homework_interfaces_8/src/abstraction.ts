class Address {
    public street: string;
    public city: string;

    public constructor(street: string, city: string) {
        this.street = street;
        this.city = city;
    }

    public getFullAddress(): string {
        return `${this.street}, ${this.city}`;
    }
}

abstract class Person {
    public name: string;
    public age: number;
    public address: Address;

    public constructor(name: string, age: number, address: Address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    public abstract introduce(): void;

    public getDetails(): string {
        return `${this.name}, Age: ${this.age}, Address: ${this.address.getFullAddress()}`;
    }
}

class Student extends Person {
    private school: string;

    public constructor(name: string, age: number, address: Address, school: string) {
        super(name, age, address);
        this.school = school;
    }

    public introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old student at ${this.school}.`);
    }
}

const address = new Address('Main street 122', 'Kyiv');
const student = new Student('Anna Kos', 19, address, 'Economical University');

student.introduce();
console.log(student.getDetails());
