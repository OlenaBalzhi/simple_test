import {expect, test} from '@playwright/test';

test.describe('Open ukr.net technology`s page', ()=>{
    test('Open ukr.net technology`s page', async ({page})=>{
        await page.goto('https://www.google.com');
        // const cookie = page.locator('text= Zgadzam się');
        // await cookie.click();
        const searchInput=page.locator("xpath=//input[@title='Search']");
        await searchInput.fill('ukr.net');
        await searchInput.press('Enter');
        await page.waitForLoadState();
        const necessaryLink = page.locator("text=UKR.NET: Все новости Украины, последние новости дня в ...");
        await necessaryLink.click();
        const linkToGo = page.locator('xpath=//*[@id="feed"]/section[1]/h2/a');
        await linkToGo.click();
        const news = page.locator('xpath=//*[@id="nav"]/div/div/ul/li[6]/a');
        await news.click();
        await page.waitForLoadState();
        const title = page.locator('xpath=//*[@id="main"]/div/h2');
        await page.waitForLoadState();
        await expect(title).toHaveText("Нові технології");
    });
});