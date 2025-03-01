import { expect } from 'chai';
import { Animal, Dog, Cat, PetOwner } from 'src\\classes';

describe('Top level describe', () => {

    const originalLog = console.log;
    let logOutput: string[];

    beforeEach(() => {
        logOutput = [];
        console.log = (message: string) => {
            logOutput.push(message);
        };
    });

    afterEach(() => {
        console.log = originalLog;
    });

    it('should make sound correctly', () => {
        const animal = new Animal('Generic Animal', 5);
        animal.makeSound();

        expect(logOutput[0]).to.equal('Generic Animal makes a sound!');
    });

    it('should make a barking sound', () => {
        const dog = new Dog('Lucy', 5);
        dog.makeSound();

        expect(logOutput[0]).to.equal('Lucy barks!');
    });

    it('should allow petting the dog', () => {
        const dog = new Dog('Lucy', 5);
        dog.pet();

        expect(logOutput[0]).to.equal('You pet Lucy, the dog!');
    });

    it('should make a meowing sound', () => {
        const cat = new Cat('Patty', 3);
        cat.makeSound();

        expect(logOutput[0]).to.equal('Patty meows!');
    });

    it('should allow petting the cat', () => {
        const cat = new Cat('Patty', 3);
        cat.pet();

        expect(logOutput[0]).to.equal('You pet Patty, the cat!');
    });

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
        petOwner.showPets();

        expect(logOutput).to.include('Lucy is a Dog');
        expect(logOutput).to.include('Patty is a Cat');
    });

    it('should pet an animal correctly', () => {
        const petOwner = new PetOwner('Alex');
        const dog = new Dog('Lucy', 5);
        petOwner.petAnimal(dog);

        expect(logOutput[0]).to.equal('You pet Lucy, the dog!');
    });
});
