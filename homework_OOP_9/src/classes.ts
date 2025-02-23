import { IAnimalInterface, Shape } from './interface';

export class Animal implements IAnimalInterface {
    public constructor(public name: string, public age: number) {}

    public makeSound(): void {
        console.log(`${this.name} makes a sound!`);
    }
}

export class Dog extends Animal implements IAnimalInterface {
    public makeSound(): void {
        console.log(`${this.name} barks!`);
    }
}

export class Cat extends Animal implements IAnimalInterface {
    public makeSound(): void {
        console.log(`${this.name} meows!`);
    }
}

export class PetOwner {
    private pets: IAnimalInterface[] = [];

    public constructor(public name: string) {}

    public adoptPet(pet: IAnimalInterface): void {
        this.pets.push(pet);
    }

    public showPets(): void {
        this.pets.forEach(pet => {
            console.log(`${pet.name} is a ${pet.constructor.name}`);
        });
    }
}

export class Circle implements Shape {
    public constructor(public radius: number) {}

    public area(): number {
        return Math.PI * this.radius * this.radius;
    }

    public perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

export class Rectangle implements Shape {
    public constructor(public width: number, public height: number) {}

    public area(): number {
        return this.width * this.height;
    }

    public perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

export class Triangle implements Shape {
    public constructor(public base: number, public height: number, public side1: number, public side2: number) {}

    public area(): number {
        return 0.5 * this.base * this.height;
    }

    public perimeter(): number {
        return this.base + this.side1 + this.side2;
    }
}
