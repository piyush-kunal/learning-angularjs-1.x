let express = require('express');
let Order = require('../models/order');
let OrderService = require('../services/orderservice');

class OrderRouter {
    constructor() {
        this.router = express.Router();
        this.orderService = new OrderService();

        this.initializeRouter();
    }

    initializeRouter() {
        this.router.get('/:customerId',
            (request, response) => {
                let parsedCustomerId = parseInt(request.params.customerId);

                this.orderService.getOrders(parsedCustomerId)
                    .then(
                        results => response.json(results),
                        error => {
                            response.status(SERVER_FAILURE).send({
                                reason: 'Unable to process the request!'
                            })
                        });
            });
    }

    get Router() {
        return this.router;
    }
}

module.exports = OrderRouter;