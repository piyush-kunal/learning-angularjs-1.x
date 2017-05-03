let ObjectFormatter = require('../utilities/objectformatter');

class UserProfile {
    constructor(userId, password, email, department, location, type) {
        [
            this.userId, this.password, this.email,
            this.department, this.location, this.type
        ] = arguments;
    }

    toString() {
        return ObjectFormatter.format(this);
    }
}

module.exports = UserProfile;
