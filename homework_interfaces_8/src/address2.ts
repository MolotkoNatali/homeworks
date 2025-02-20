export class Address2 {
    public constructor(public street: string, public city: string) {}

    public getFullAddress(): string {
        return `${this.street}, ${this.city}`;
    }
}

export class Student2 {
    public constructor(public name: string, public age: number, public address: Address2) {}

    public introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old student.`);
    }

    public getDetails(): string {
        return `${this.name}, Age: ${this.age}, Address: ${this.address.getFullAddress()}`;
    }
}
