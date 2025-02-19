class Author {
    public name: string;
    public birthYear: number;

    public constructor(name: string, birthYear: number) {
        this.name = name;
        this.birthYear = birthYear;
    }

    public getAge(currentYear: number): number {
        return currentYear - this.birthYear;
    }
}

class Publisher {
    public name: string;
    public location: string;

    public constructor(name: string, location: string) {
        this.name = name;
        this.location = location;
    }
}

export class Book {
    public title: string;
    public author: Author;
    public publisher: Publisher;
    private publishYear: number;

    public constructor(title: string, author: Author, publisher: Publisher, publishYear: number) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.publishYear = publishYear;
    }

    public getBookInfo(): string {
        return `${this.title} by ${this.author.name}, published by ${this.publisher.name}`;
    }

    public getAuthorAge(currentYear: number): number {
        return this.author.getAge(currentYear);
    }

    private updatePublishYear(newYear: number): void {
        this.publishYear = newYear;
        console.log(`The book's publish year updated to: ${this.publishYear}`);
    }

    public setPublishYear(newYear: number): void {
        this.updatePublishYear(newYear);
    }
}

const author = new Author('Paulo Coelho', 1947);
const publisher = new Publisher('Harper Torch', 'Brazil');
const book = new Book('The Alchemist', author, publisher, 1988);

console.log(book.getBookInfo());
console.log(`Author's Age: ${book.getAuthorAge(2025)}`);

book.setPublishYear(2002);
