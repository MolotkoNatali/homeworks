import { Results } from './interfaces';
import { Book, Author, Publisher } from './class';
import { Address, Student } from './abstraction';
import { Address2, Student2 } from './address2';
import { Obj2 } from './class-obj2';

async function fetchRandomUser(): Promise<Results> {

    try {
        const response = await fetch('https://randomuser.me/api/');

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const json = await response.json() as Results;

        return json;
    } catch (error) {
        console.error('Error fetching random user:', error);
        throw error;
    }
}


(async () => {
    const data = await fetchRandomUser();
    const user = data.results[0];

    const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
    console.log(`Full Name: ${fullName}`);

    console.log(`Email: ${user.email}`);

    const location = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
    console.log(`Location: ${location}`);

    user.phone = '579-111-8250';
    console.log(`Modified Phone Number: ${user.phone}`);

    const obj2 = new Obj2(user);
    console.log(obj2.shortInfo);
    console.log(`Age: ${obj2.sumAge}`);
    console.log(`Location: ${obj2.fullLocation}`);
})();


const author = new Author('Paulo Coelho', 1947);
const publisher = new Publisher('Harper Torch', 'Brazil');
const book = new Book('The Alchemist', author, publisher, 1988);

console.log(book.getBookInfo());
console.log(`Author's Age: ${book.getAuthorAge(2025)}`);
book.setPublishYear(2002);


const address = new Address('Main street 122', 'Kyiv');
const student = new Student('Anna Kos', 19, address, 'Economical University');

student.introduce();
console.log(student.getDetails());


const newAddress = new Address2('Main St 123', 'Kyiv');
const newStudent = new Student2('Anna', 19, newAddress);

newStudent.introduce();
console.log(newStudent.getDetails());

newStudent.age = 20;
const newAddress2 = new Address2('New street 122', 'Lviv');
newStudent.address = newAddress2;
console.log(newStudent.getDetails());
