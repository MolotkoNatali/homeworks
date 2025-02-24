export interface IAnimalInterface {
    name: string;
    age: number;
    makeSound(): void;
}

export interface IHomeAnimal extends IAnimalInterface {
    pet(): void;
}

export interface IShape {
    area(): number;
    perimeter(): number;
}
