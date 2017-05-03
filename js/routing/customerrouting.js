let express = require('express');
let Customer = require('../models/customer');
let CustomerService = require('../services/customerservice');
let WebSocketEvents = require('../utilities/websocketevents');
let cluster = require('cluster');

const SERVER_FAILURE = 501;
const NOT_FOUND = 404;

class CustomerRouter {
    constructor(socketServer) {
        this.router = express.Router();
        this.customerService = new CustomerService();
        this.socketServer = socketServer;

        this.initializeRouter();
    }

    initializeRouter() {
        this.router.get('/',
            (request, response) => {
                let workerId = cluster.worker.id;

                console.log(`Worker Instance ${workerId} Serves the Request ....`);

                this.customerService.getCustomers()
                    .then(
                        results => response.json(results),
                        error => response.status(SERVER_FAILURE).send({
                            reason: 'Unable to process the request!'
                        }));
            });

        this.router.get('/:customerId',
            (request, response) => {
                let customerId = parseInt(request.params.customerId);

                this.customerService.getCustomer(customerId)
                    .then(
                        result => response.json(result),
                        error => {
                            response.status(NOT_FOUND);
                        });
            });

        this.router.post('/',
            (request, response) => {
                let customer = request.body;

                customer.__proto__ = new Customer();

                this.customerService.addCustomer(customer)
                    .then(
                        result => {
                            if (this.socketServer) {
                                this.socketServer.emit(WebSocketEvents.NEW_CUSTOMER, customer);
                            }

                            response.json({
                                status: result
                            });
                        },
                        error => response.status(SERVER_FAILURE).send({
                            reason: 'Unable to process the request!'
                        }));
            });
    }

    get Router() {
        return this.router;
    }
}

module.exports = CustomerRouter;