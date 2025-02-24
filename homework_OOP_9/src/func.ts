import { Cat, Dog, PetOwner } from './classes';
import { IAnimalInterface, IShape } from './interface';
import { Circle, Rectangle, Triangle } from './classes';

function animalSound(animal: IAnimalInterface): void {
    animal.makeSound();
}

const dog = new Dog('Lucy', 5);
const cat = new Cat('Patty', 3);
animalSound(dog);
animalSound(cat);

const owner = new PetOwner('Alex');

owner.adoptPet(dog);
owner.adoptPet(cat);
owner.showPets();

owner.petAnimal(dog);
owner.petAnimal(cat);


function printShapeInfo(shape: IShape): void {
    console.log(`Area: ${shape.area()}`);
    console.log(`Perimeter: ${shape.perimeter()}`);
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 4, 3, 5);

console.log('Circle Info:');
printShapeInfo(circle);

console.log('\nRectangle Info:');
printShapeInfo(rectangle);

console.log('\nTriangle Info:');
printShapeInfo(triangle);
