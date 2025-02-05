const car = {
    make: 'BMW',
    model: 'X5',
    year: 2002,
    specifications: {
        color: 'black',
        fuel: 'diesel',
        'country of origin': 'Germany'
    },
    avaliableOptions: ['adaptive cruise control', 'active protection system', 'blind spot detection'],
    showDetails: function () {
        console.log(`Car: ${this.make} ${this.model} (${this.year})`);
        console.log('Specifications:');
        console.log(`Color: ${this.specifications.color}`);
        console.log(`Fuel: ${this.specifications.fuel}`);
        console.log(`Country of origin: ${this.specifications['country of origin']}`);
        console.log('Available options:');
        this.avaliableOptions.forEach((option) => {
            console.log(option);
        });
    }
};

car.showDetails();
