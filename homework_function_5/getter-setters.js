const student = {
    _name: 'Anna Kos',
    _age: 21,
    _grade: 95,

    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 3) {
            console.log('Name must be minimum 3 characters long.');
        } else {
            this._name = value;
        }
    },

    get age() {
        return this._age;
    },

    set age(value) {
        if (value < 18 || value > 80) {
            console.log('Age must be between 18 and 80.');
        } else {
            this._age = value;
        }
    },

    get grade() {
        return this._grade;
    },

    set grade(value) {
        if (value < 0 || value > 100) {
            console.log('Grade must be between 0 and 100.');
        } else {
            this._grade = value;
        }
    },


    passOrFail() {
        return this._grade >= 50 ? 'Passed' : 'Failed';
    }
};

student.name = 'Alex';
student.age = 19;
student.grade = 77;

student.name = 'Al';
student.age = 15;
student.grade = 105;


console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);
console.log(`Grade: ${student.grade}`);

console.log(`Status: ${student.passOrFail()}`);
