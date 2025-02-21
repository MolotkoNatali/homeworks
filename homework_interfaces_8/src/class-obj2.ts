import { User } from './interfaces';

export class Obj2 {
    public shortInfo: string;
    public sumAge: number;
    public fullLocation: string;

    public constructor(user: User) {

        this.shortInfo = `Name: ${user.name.first} ${user.name.last}, Gender: ${user.gender}, Email: ${user.email}`;
        this.sumAge = user.dob.age;
        this.fullLocation = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
    }
}
