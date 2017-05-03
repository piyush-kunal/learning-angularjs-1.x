let Order = require('../models/order');
let Randomizer = require('../utilities/randomizer');

class OrderService {
    getOrders(customerId) {
        let promise = new Promise(
            (resolve, reject) => {
                if (!customerId) {
                    reject({
                        reason: 'Invalid Index Specified!'
                    });
                }

                let orders = [];
                let noOfRecords = Randomizer.getValue(10, 15);
                let remarks = 'Simple Order Record';

                for (let index = 0; index < noOfRecords; index++) {
                    let order = new Order(
                        Randomizer.getValue(1, 10000),
                        new Date(),
                        customerId,
                        Randomizer.getValue(10, 50),
                        Randomizer.getValue(1000, 5000),
                        remarks);

                    orders.push(order);
                }

                resolve(orders);
            });

        return promise;
    }
}

module.exports = OrderService;