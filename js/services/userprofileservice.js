let UserProfile = require('../models/userprofile');

class UserProfileService {
    constructor() {
        this.userProfiles = [
            new UserProfile('user111', 'admin@123', 'user111@tecnotree.com', 'IT', 'Bangalore', 'FTE'),
            new UserProfile('user112', 'admin@123', 'user112@tecnotree.com', 'IT', 'Bangalore', 'FTE'),
            new UserProfile('user113', 'admin@123', 'user113@tecnotree.com', 'IT', 'Bangalore', 'FTE'),
            new UserProfile('user114', 'admin@123', 'user114@tecnotree.com', 'IT', 'Bangalore', 'FTE'),
            new UserProfile('user115', 'admin@123', 'user115@tecnotree.com', 'IT', 'Bangalore', 'FTE'),
            new UserProfile('user116', 'admin@123', 'user116@tecnotree.com', 'IT', 'Bangalore', 'FTE')
        ];
    }

    getUserProfile(userId) {
        let promise = new Promise(
            (resolve, reject) => {
                if (!userId) {
                    reject({
                        reason: 'Invalid User Profile Id Specified!'
                    });
                }

                let filteredProfile = null;

                for (let profile of this.userProfiles) {
                    if (profile.userId === userId) {
                        filteredProfile = profile;
                        break;
                    }
                }

                if (filteredProfile) {
                    resolve(filteredProfile);
                } else {
                    reject({
                        reason: 'Profile Not Found!'
                    });
                }
            });

        return promise;
    }

    validate(userId, password) {
        let promise = new Promise(
            (resolve, reject) => {
                this.getUserProfile(userId)
                    .then(
                        result => {
                            if (result) {
                                let validationStatus = result.password === password;

                                if (validationStatus) {
                                    resolve(true);
                                } else {
                                    reject(false);
                                }
                            }
                        },
                        error => reject(error));
            });

        return promise;
    }
}

module.exports = UserProfileService;