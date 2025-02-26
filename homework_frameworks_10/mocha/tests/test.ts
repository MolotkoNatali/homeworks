import { expect } from 'chai';
import { Animal, Dog, PetOwner } from 'src/classes';

describe('PetOwner Class', () => {
    let dog: Dog;
    let petOwner: PetOwner;

    beforeEach(() => {
        dog = new Dog('Lucy', 5);
        petOwner = new PetOwner('Alex');
        petOwner.adoptPet(dog);
    });

    it('should update the age of a pet', () => {

        expect(dog.age).to.equal(5);

        petOwner.updateAge(dog, 6);

        expect(dog.age).to.equal(6);
    });

    it('should update the name of a pet', () => {

        expect(dog.name).to.equal('Lucy');

        petOwner.updateName(dog, 'Big Lucy');

        expect(dog.name).to.equal('Big Lucy');
    });

    it('should not modify the name or age if parameters are not passed', () => {
        const initialName = dog.name;
        const initialAge = dog.age;

        petOwner.updateName(dog, undefined as unknown as string);
        petOwner.updateAge(dog, undefined as unknown as number);

        expect(dog.name).to.equal(initialName);
        expect(dog.age).to.equal(initialAge);
    });

    it('should adopt multiple pets and show their details', () => {

        const cat = new Animal('Patty', 3);
        petOwner.adoptPet(cat);


        let output = '';
        const log = console.log;
        console.log = (message: string) => {
            output += message + '\n';
        };


        petOwner.showPets();


        expect(output).to.include('Lucy is a Dog');
        expect(output).to.include('Patty is a Animal');
        console.log = log;
    });

    it('should pet a home animal', () => {
        let output = '';
        const log = console.log;
        console.log = (message: string) => {
            output += message + '\n';
        };

        petOwner.petAnimal(dog);

        expect(output).to.include('You pet Lucy, the dog!');

        console.log = log;
    });
});
