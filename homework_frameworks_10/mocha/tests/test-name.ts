import { expect } from 'chai';
import { Animal, Dog, PetOwner } from 'src/classes';

describe('Top level describe', () => {

    const originalLog = console.log;
    let dog: Dog;
    let petOwner: PetOwner;
    let logOutput: string[];

    beforeEach(() => {
        logOutput = [];
        console.log = (message: string) => {
            logOutput.push(message);
        };

        dog = new Dog('Lucy', 5);
        petOwner = new PetOwner('Alex');
        petOwner.adoptPet(dog);
    });

    afterEach(() => {
        console.log = originalLog;
    });

    it('should adopt multiple pets and show their details', () => {
        const cat = new Animal('Patty', 3);
        petOwner.adoptPet(cat);
        petOwner.showPets();

        expect(logOutput).to.include('Lucy is a Dog');
        expect(logOutput).to.include('Patty is a Animal');

        expect(logOutput.length).to.be.greaterThan(1);
    });

    it('should pet a home animal', () => {
        petOwner.petAnimal(dog);
        expect(logOutput).to.include('You pet Lucy, the dog!');
    });

    it('should update the name of a pet', () => {
        expect(dog.name).to.equal('Lucy');
        petOwner.updateName(dog, 'Big Lucy');
        expect(dog.name).to.equal('Big Lucy');
    });

    it('should not modify the name if parameters are not passed', () => {
        const initialName = dog.name;
        petOwner.updateName(dog, undefined as unknown as string);
        expect(dog.name).to.equal(initialName);
    });
});
