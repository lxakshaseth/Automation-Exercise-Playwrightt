import {expect, test} from "@playwright/test";
import { HomePage } from "./pages/homePage";
import { HeaderPage } from "./base/header";

test('Verify Test Cases Page', async({page})=>{
    const Home = new HomePage(page);
    const Header = new HeaderPage(page);

    await Home.goToHomePage();
    await Header.clickOnTestCases();
    await page.waitForTimeout(2000);
    
})