import { IAnimalInterface, IHomeAnimal } from './interface';

export class Animal implements IAnimalInterface {
    public constructor(public name: string, public age: number) {}

    public makeSound(): void {
        console.log(`${this.name} makes a sound!`);
    }
}

export class Dog extends Animal implements IHomeAnimal {
    public makeSound(): void {
        console.log(`${this.name} barks!`);
    }
    public pet(): void {
        console.log(`You pet ${this.name}, the dog!`);
    }
}


export class Cat extends Animal implements IHomeAnimal {
    public makeSound(): void {
        console.log(`${this.name} meows!`);
    }
    public pet(): void {
        console.log(`You pet ${this.name}, the cat!`);
    }
}

export class PetOwner {
    private pets: IAnimalInterface[] = [];

    public constructor(public name: string) {}

    public adoptPet(pet: IAnimalInterface): void {
        this.pets.push(pet);
    }

    public updateAge(pet: IAnimalInterface, newAge: number): void {
        if (newAge && newAge > 0) {
            pet.age = newAge;
        }
    }

    public updateName(pet: IAnimalInterface, newName: string): void {
        if (newName && newName.trim()) {
            pet.name = newName;
        }
    }

    public showPets(): void {
        this.pets.forEach(pet => {
            console.log(`${pet.name} is a ${pet.constructor.name}`);
        });
    }

    public petAnimal(pet: IHomeAnimal): void {
        pet.pet();
    }
}
