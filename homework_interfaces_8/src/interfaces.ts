export interface Results {
    results: User[];
    info: Info;
}
export interface User{
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: DateOfBirth;
    registered: DateOfBirth;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
}
interface Name {
    title: string;
    first: string;
    last: string;
}

interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: Coordinates;
    timezone: Timezone;
}

interface Street {
    number: number;
    name: string;
}

interface Coordinates {
    latitude: string;
    longitude: string;
}

interface Timezone {
    offset: string;
    description: string;
}

interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

interface DateOfBirth {
    date: string;
    age: number;
}

interface Id {
    name: string;
    value: string | null;
}

interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
}


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

class Obj2 {
    public shortInfo: string;
    public sumAge: number;
    public fullLocation: string;

    public constructor(user: User) {

        this.shortInfo = `Name: ${user.name.first} ${user.name.last}, Gender: ${user.gender}, Email: ${user.email}`;
        this.sumAge = user.dob.age;
        this.fullLocation = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
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
