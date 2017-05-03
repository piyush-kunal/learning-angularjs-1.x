let express = require('express');
let jwt = require('jsonwebtoken');

let UserProfileService = require('../services/userprofileservice');

let SERVER_FAILURE = 501;

class UserProfileRouter {
    constructor(globalSecretKey) {
        this.router = express.Router();
        this.userProfileService = new UserProfileService();
        this.initializeRouter();
        this.globalSecretKey = globalSecretKey;
    }

    initializeRouter() {
        this.router.post('/',
            (request, response) => {
                let userName = request.body.userName;
                let password = request.body.password;

                let validation = userName && password;

                if (!validation) {
                    response.status(SERVER_FAILURE);
                    return;
                }

                this.userProfileService.validate(userName, password)
                    .then(
                        result => {
                            if (!result) {
                                response.status(SERVER_FAILURE);
                            }

                            this.userProfileService.getUserProfile(userName)
                                .then(
                                    profile => {
                                        let signature = jwt.sign(profile, this.globalSecretKey);

                                        response.json({
                                            token: signature
                                        });
                                    },
                                    error => response.status(SERVER_FAILURE));
                        },
                        error => response.status(SERVER_FAILURE).send({
                            reason: 'Authentication Failed!'
                        }));
            });
    }

    get Router() {
        return this.router;
    }
}

module.exports = UserProfileRouter;