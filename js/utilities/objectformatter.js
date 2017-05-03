class ObjectFormatter {
    static format(obj) {
        let formattedMessage = '';
        let delimiter = ', ';
        let noOfTrailCharacters = 2;

        if (obj) {
            for (let property in obj) {
                let propertyValue = obj[property];

                if (typeof propertyValue !== 'function') {
                    formattedMessage += `${propertyValue}${delimiter}`;
                }
            }

            formattedMessage = formattedMessage.substr(0,
                formattedMessage.length - noOfTrailCharacters);
        }

        return formattedMessage;
    }
}

module.exports = ObjectFormatter;