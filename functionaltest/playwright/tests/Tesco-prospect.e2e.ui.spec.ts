import test, { Page, expect } from "@playwright/test";

test('open lannding page', async ({ page }) => {

    await page.setViewportSize({
        width: 1440,
        height: 900,
    });

    await page.goto('https://www.tesco.com/');
    

});