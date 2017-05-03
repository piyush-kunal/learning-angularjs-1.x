(function () {
    try {
        var WebSocketEvents = {
            NEW_CUSTOMER: 'newCustomerRecord',
            UPDATE_CUSTOMER: 'updateCustomerRecord',
            DELETE_CUSTOMER: 'deleteCustomerRecord'
        };

        var url = window.location.protocol + '//' +
            window.location.hostname + ':' + window.location.port;
        var socketClient = io.connect(url);

        if (socketClient) {
            console.info('Socket Client Connection Successfully Established!');

            socketClient.on(WebSocketEvents.NEW_CUSTOMER,
                function (notificationData) {
                    if (notificationData) {
                        console.log('Notification Received ...' +
                            JSON.stringify(notificationData));
                    }
                });
        }
    } catch (error) {
        console.error('Error Occurred ... ' + JSON.stringify(error));
    }
})();