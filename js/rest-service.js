let express = require('express');
let fs = require('fs')
let bodyParser = require('body-parser');
let expressjwt = require('express-jwt');
let http = require('http');
let https = require('https');
let sio = require('socket.io');

const DEFAULT_PORT_NUMBER = 9090;

(function () {
    let globalSecretKey = 'Tecnotree, Bangalore 560018';
    let argv = require('minimist')(process.argv.slice(2), {
        boolean: true
    });
    let CustomerRouter = require('./routing/customerrouting');
    let OrderRouter = require('./routing/orderrouting');
    let UserProfileRouter = require('./routing/userprofilerouting');
    let Randomizer = require('./utilities/randomizer');

    let app = express();
    let server = null;

    let enableSecurity = argv["enable-security"] || false;

    if (enableSecurity) {
        server = https.createServer({
            key: fs.readFileSync('key.pem'),
            cert: fs.readFileSync('cert.pem'),
            passphrase: 'Prestige123$$/?'
        }, app);
    } else {
        server = http.createServer(app);
    }

    let sioImpl = sio.listen(server);

    sioImpl.on('connection', (socketClient) => {
        let socketClientId = Randomizer.getValue();

        socketClient.clientId = socketClientId;

        console.log('WebSocket Client Connected ... ' + socketClient.clientId);

        socketClient.on('disconnect', () => {
            console.log('WebSocket Client Disconnected ... ' + socketClient.clientId);
        });
    });

    let customerRouter = new CustomerRouter(sioImpl);
    let orderRouter = new OrderRouter();
    let userProfileRouter = new UserProfileRouter(globalSecretKey);

    let portNumber = argv["port-number"] || DEFAULT_PORT_NUMBER;
    let provideCors = function (request, response, next) {
        if (response) {
            response.header('Access-Control-Allow-Credentials', 'true');
            response.header('Access-Control-Allow-Origin', '*');
            response.header('Access-Control-Allow-Methods', '*');
            response.header('Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        }

        next();
    };

    app.use(provideCors);

    let enableJwtOption = argv["enable-jwt"] || false;

    if (enableJwtOption) {
        app.use('/api/customers', expressjwt({
            secret: globalSecretKey
        }));
        app.use('/api/orders', expressjwt({
            secret: globalSecretKey
        }));
    }

    app.use(bodyParser.json());
    app.use('/api/customers', customerRouter.Router);
    app.use('/api/orders', orderRouter.Router);
    app.use('/authenticate', userProfileRouter.Router);

    var buildContentFolder = __dirname + '/../build/';

    app.use('/', express.static(buildContentFolder));

    server.listen(portNumber);

    console.log('REST Service is available for use ...');
})();