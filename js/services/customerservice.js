let Customer = require('../models/customer');
let Randomizer = require('../utilities/randomizer');

class CustomerService {
    constructor() {
        let customerNames = [
            'Northwind Traders', 'Southwind Traders',
            'Eastwind Traders', 'Westwind Traders',
            'Oxyrich Traders', 'Adventureworks',
            'Footmart', 'ePublishers'
        ];

        this.customers = [];

        let remarks = 'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add.';

        customerNames.forEach((name, index) => {
            let customer = new Customer(index + 1,
                name, 'Bangalore', Randomizer.getValue(),
                index % 2 == 0, remarks);

            this.customers.push(customer);
        });
    }

    getCustomers() {
        let promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => resolve(this.customers), 0);
            });

        return promise;
    }

    getCustomer(id) {
        let promise = new Promise(
            (resolve, reject) => {
                if (!id) {
                    reject({
                        reason: 'Invalid Id Specified!'
                    });
                }

                let filteredCustomer = null;

                for (let customer of this.customers) {
                    if (customer.id === id) {
                        filteredCustomer = customer;
                        break;
                    }
                }

                if (filteredCustomer) {
                    resolve(filteredCustomer);
                } else reject({
                    reason: 'Customer Record Not Found!'
                });
            });

        return promise;
    }

    addCustomer(customer) {
        let promise = new Promise(
            (resolve, reject) => {
                let validation = customer && customer instanceof Customer;

                if (!validation) {
                    reject({
                        reason: 'Invalid Customer Specified!'
                    });
                }

                this.customers.push(customer);

                resolve(true);
            });

        return promise;
    }
}

module.exports = CustomerService;
