class Address2 {
    public constructor(public street: string, public city: string) {}

    public getFullAddress(): string {
        return `${this.street}, ${this.city}`;
    }
}

class Student2 {
    public constructor(public name: string, public age: number, public address: Address2) {}

    public introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old student.`);
    }

    public getDetails(): string {
        return `${this.name}, Age: ${this.age}, Address: ${this.address.getFullAddress()}`;
    }
}

const newAddress = new Address2('Main St 123', 'Kyiv');
const newStudent = new Student2('Anna', 19, newAddress);

newStudent.introduce();
console.log(newStudent.getDetails());

newStudent.age = 20;
const newAddress2 = new Address2('New street 122', 'Lviv');
newStudent.address = newAddress2;
console.log(newStudent.getDetails());
