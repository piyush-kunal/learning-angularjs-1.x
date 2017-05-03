describe('CRM System Home View Controller Test Suite', function () {
    var moduleToLoad = 'com.intsol.modules.crmsystem.controllers';

    beforeEach(module(moduleToLoad));

    var scope = {
        changed: false,
        $watch: function (property, callback) {
            scope.changed = true;
        }
    }
    var mockCustomers =
        [
            {id: 11, name: "Mock Customer 11", address: "Bangalore", credit: 12000, status: true, remarks: "Simple"},
            {id: 12, name: "Mock Customer 12", address: "Bangalore", credit: 12000, status: true, remarks: "Simple"},
            {id: 13, name: "Mock Customer 13", address: "Bangalore", credit: 12000, status: true, remarks: "Simple"},
            {id: 14, name: "Mock Customer 14", address: "Bangalore", credit: 12000, status: true, remarks: "Simple"},
            {id: 15, name: "Mock Customer 15", address: "Bangalore", credit: 12000, status: true, remarks: "Simple"}
        ];
    var mockCustomerService = {
        getCustomers: function () {
            return {
                then: function (sc, fc) {
                    sc(mockCustomers);
                }
            }
        }
    };
    var mockNotificationService = {
        registerCallback: function (name, callback) {
        }
    };
    var controller = null;
    var mockNotificationEvents = {
        NEW_CUSTOMER_RECORD: ''
    };

    it('Valid Test Case 1', inject(function ($controller) {

        spyOn(mockCustomerService, 'getCustomers').and.callThrough();

        expect(scope.changed).toBeFalsy();

        controller = $controller('crmSystemHomeViewController', {
            $scope: scope,
            customerService: mockCustomerService,
            notificationService: mockNotificationService,
            pushNotificationEvents: mockNotificationEvents
        });

        expect(scope.customers).toBeDefined();
        expect(scope.customers.length).toBe(5);
        expect(scope.customers[0].id).toBe(11);
        expect(scope.customers[2].name).toBe('Mock Customer 13');

        expect(scope.changed).toBeTruthy();
        expect(mockCustomerService.getCustomers).toHaveBeenCalledTimes(1);
    }));

    afterEach(
        function () {
            console.log('Test Cleanup Completed!');
        });
});