const wd = require("selenium-webdriver");
const assert = require("assert");

(async function testButton() {
    try {
        // Grab the location of the file to test
        indexFile = "file://" + process.cwd() + "/index.html";

        // Create the driver, defaulting to firefox
        let driver = await new wd.Builder().forBrowser("firefox").build();
        await driver.manage().setTimeouts({implicit: 60});
        await driver.get(indexFile);

        // Get and perform a click on the button
        let textButton = await driver.findElement(wd.By.id("text_btn"));
        await textButton.click();

        // Get and check the new text after clicking the button
        let newText = await driver.findElement(wd.By.id("demo")).getText();
        assert.deepStrictEqual(newText, "new text!");

        // Make sure the selenium process is exited properly
        await driver.quit();
        console.log("TEST PASSED");
    } catch (error) {
        throw error;
    }
})();