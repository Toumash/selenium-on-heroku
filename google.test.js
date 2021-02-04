const fs = require('fs');
describe('test google.com', () => {

    const {
        Builder,
        By,
        Key,
        until
    } = require('selenium-webdriver');
    var driver;

    beforeEach(() => {
        driver = new Builder()
            .forBrowser('chrome')
            .build();
    });

    afterEach(() => {
        driver.quit();
    });

    it('should open google search', async () => {
        await driver.get('http://www.google.com');
        driver
            .getTitle()
            .then(title => {
                expect(title).toEqual('Google');
            });
    });
});