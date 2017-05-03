/**
 * Created by Ramkumar on 4/15/2016.
 */

xdescribe('ui test suite', function () {
    var urlToNavigate = '/';

    beforeEach(function () {
        browser.get(urlToNavigate);
    });

    xit('test case 1', function () {
        browser.getLocationAbsUrl().then(
            function (url) {
                console.log('URL :' + url);
                var expectedUrl = '/home';

                expect(url).toBe(expectedUrl);
            });
    });

    xit('test case 2', function () {
        var userName = element(by.model('userName'));
        userName.sendKeys('trguser11');

        browser.driver.sleep(1000);

        var password = element(by.model('password'));
        password.sendKeys('admin@123');

        browser.driver.sleep(1000);

        var signin = element(by.id('btnSignIn'));
        signin.click();

        browser.driver.sleep(2000);

        var welcomeSpan = element(by.id('welcomeMessage'));

        welcomeSpan.getText().then(
            function (text) {
                console.log('TEXT .. ' + text);
                var expectedText = 'Welcome trguser11,';
                expect(text).toBe(expectedText);
            });
    });

    afterEach(function () {
        console.log('Cleanup Completed!');
    });
});