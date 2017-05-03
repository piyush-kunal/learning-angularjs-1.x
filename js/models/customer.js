let ObjectFormatter = require('../utilities/objectformatter');

class Customer {
    constructor(...args) {
        [
            this.id, this.name, this.address,
            this.credit, this.status, this.remarks
        ] = args;
    }

    toString() {
        return ObjectFormatter.format(this);
    }
}

module.exports = Customer;
