let ObjectFormatter = require('../utilities/objectformatter');

class Order {
    constructor() {
        [
            this.orderId, this.orderDate, this.customer,
            this.units, this.amount, this.remarks
        ] = arguments;
    }

    toString() {
        return ObjectFormatter.format(this);
    }
}

module.exports = Order;
