/**
 * Created by Ramkumar on 4/15/2016.
 */

describe('ui test suite', function () {
    var urlToNavigate = '/';

    beforeEach(function () {
        browser.get(urlToNavigate);
    });

    it('test case 2', function () {
        var userName = element(by.model('userName'));
        userName.sendKeys('trguser11');

        var password = element(by.model('password'));
        password.sendKeys('admin@123');

        var signin = element(by.id('btnSignIn'));
        signin.click();

        var crmSystemLink = element(by.id("crm-system-link"));
        crmSystemLink.click();

        browser.driver.sleep(2000);

        var customerElements = element.all(by.repeater('customer in customers'));
        expect(customerElements.count()).toBe(10);

        browser.driver.sleep(2000);

        var searchStringElement = element(by.model('searchString'));
        searchStringElement.sendKeys("south");

        expect(customerElements.count()).toBe(1);

        browser.driver.sleep(1000);

        searchStringElement.clear();

        expect(customerElements.count()).toBe(10);
    });

    afterEach(function () {
        console.log('Cleanup Completed!');
    });
});