const express = require('express');
const app = express();

app.get('/api', async (req, res) => {
    const webdriver = require('selenium-webdriver');
    require('chromedriver');
    const chrome = require('selenium-webdriver/chrome');

    let options = new chrome.Options();
    options.setChromeBinaryPath(process.env.CHROME_BINARY_PATH);
    let serviceBuilder = new chrome.ServiceBuilder(process.env.CHROME_DRIVER_PATH);
    
    //Don't forget to add these for heroku
    options.addArguments("--headless");
    options.addArguments("--disable-gpu");
    options.addArguments("--no-sandbox");
  
    let driver = new webdriver.Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .setChromeService(serviceBuilder)
        .build();

    await driver.get('http://www.google.com');
    let title = await driver.getTitle();
    driver.quit();
    res.send(title);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`listening to port ${port} now...`);
});