import { expect } from 'chai';
import { Animal, Dog, Cat, PetOwner } from 'src\\classes';

describe('Animal class tests', () => {
    it('should make sound correctly', () => {
        const animal = new Animal('Generic Animal', 5);

        const originalLog = console.log;
        let logOutput = '';
        console.log = (message: string) => {
            logOutput = message;
        };

        animal.makeSound();

        expect(logOutput).to.equal('Generic Animal makes a sound!');
        console.log = originalLog;
    });
});

describe('Dog class tests', () => {
    it('should make a barking sound', () => {
        const dog = new Dog('Lucy', 5);

        const originalLog = console.log;
        let logOutput = '';
        console.log = (message: string) => {
            logOutput = message;
        };

        dog.makeSound();

        expect(logOutput).to.equal('Lucy barks!');
        console.log = originalLog;
    });

    it('should allow petting the dog', () => {
        const dog = new Dog('Lucy', 5);

        const originalLog = console.log;
        let logOutput = '';
        console.log = (message: string) => {
            logOutput = message;
        };

        dog.pet();

        expect(logOutput).to.equal('You pet Lucy, the dog!');
        console.log = originalLog;
    });
});

describe('Cat class tests', () => {
    it('should make a meowing sound', () => {
        const cat = new Cat('Patty', 3);

        const originalLog = console.log;
        let logOutput = '';
        console.log = (message: string) => {
            logOutput = message;
        };

        cat.makeSound();

        expect(logOutput).to.equal('Patty meows!');
        console.log = originalLog;
    });

    it('should allow petting the cat', () => {
        const cat = new Cat('Patty', 3);

        const originalLog = console.log;
        let logOutput = '';
        console.log = (message: string) => {
            logOutput = message;
        };

        cat.pet();

        expect(logOutput).to.equal('You pet Patty, the cat!');
        console.log = originalLog;
    });
});

describe('PetOwner class tests', () => {
    it('should adopt a pet correctly', () => {
        const petOwner = new PetOwner('Alex');
        const dog = new Dog('Lucy', 5);

        petOwner.adoptPet(dog);

        expect(petOwner['pets']).to.include(dog);
    });

    it('should show the correct list of pets', () => {
        const petOwner = new PetOwner('Alex');
        const dog = new Dog('Lucy', 5);
        const cat = new Cat('Patty', 3);

        petOwner.adoptPet(dog);
        petOwner.adoptPet(cat);

        const originalLog = console.log;
        const logOutput: string[] = [];
        console.log = (message: string) => {
            logOutput.push(message);
        };

        petOwner.showPets();

        expect(logOutput).to.include('Lucy is a Dog');
        expect(logOutput).to.include('Patty is a Cat');

        console.log = originalLog;
    });

    it('should pet an animal correctly', () => {
        const petOwner = new PetOwner('Alex');
        const dog = new Dog('Lucy', 5);

        const originalLog = console.log;
        let logOutput = '';
        console.log = (message: string) => {
            logOutput = message;
        };

        petOwner.petAnimal(dog);

        expect(logOutput).to.equal('You pet Lucy, the dog!');
        console.log = originalLog;
    });
});
