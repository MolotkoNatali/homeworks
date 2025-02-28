import { expect } from 'chai';
import sinon from 'sinon';
import { Address, Student } from 'src/class';

describe('Student Class Tests', () => {
    let addressMock: sinon.SinonStubbedInstance<Address>;
    let student: Student;

    beforeEach(() => {
        addressMock = sinon.createStubInstance(Address);
        addressMock.getFullAddress.returns('Mocked Address');

        student = new Student('Anna Kos', 19, addressMock, 'Economical University');
    });

    it('should return full details of the student', () => {
        const details = student.getDetails();
        expect(details).to.equal('Anna Kos, Age: 19, Address: Mocked Address');
    });

    it('should call getFullAddress method of Address class', () => {
        student.getDetails();
        expect(addressMock.getFullAddress.calledOnce).to.be.true;
    });

    it('should introduce student correctly', () => {
        const introduceSpy = sinon.spy(student, 'introduce');
        student.introduce();

        expect(introduceSpy.calledOnce).to.be.true;
        introduceSpy.restore();
    });

    it('should return the correct full address from Address class', () => {
        expect(addressMock.getFullAddress()).to.equal('Mocked Address');
    });

    it('should mock Address object correctly for a different address', () => {
        addressMock.getFullAddress.returns('Another Mocked Address');

        expect(addressMock.getFullAddress()).to.equal('Another Mocked Address');
    });

    afterEach(() => {
        sinon.restore();
    });
});
