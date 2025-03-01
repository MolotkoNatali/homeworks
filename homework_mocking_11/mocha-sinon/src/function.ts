import { Address, Student } from './class';
const address = new Address('Main street 122', 'Kyiv');
const student = new Student('Anna Kos', 19, address, 'Economical University');

student.introduce();
console.log(student.getDetails());
