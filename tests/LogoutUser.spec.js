import {test,expect} from '@playwright/test'
import { HomePage } from "./pages/homePage";
import { SignUpLoginPage } from "./pages/signUpLogin";
import { HeaderPage } from "./base/header";
import { SignUpInfoPage } from "./pages/signUpInfo";
const accountDetails = JSON.parse(JSON.stringify(require('./testData/accountDetails.json')));
const existingUser = JSON.parse(JSON.stringify(require('./testData/existingUser.json')));

test('Verify Logout User', async ({page}) => {
    const Home = new HomePage(page);
    const Header = new HeaderPage(page);
    const SignUpLogin = new SignUpLoginPage(page);

    Home.goToHomePage();
    await Header.clickOnsignUpLogin();
    await page
    .getByRole("heading", { name: "Login to your account" })
    .waitFor({ state: "visible" });
  await expect(
    page.getByRole("heading", { name: "Login to your account" })
  ).toBeVisible();
  await SignUpLogin.enterEmailLogin(existingUser.email);
  await SignUpLogin.enterPasswordLogin(existingUser.password);
  await SignUpLogin.clickOnLogin();
  await page.waitForTimeout(1000);
  await expect(page.getByText(`Logged in as ${existingUser.name}`)).toBeVisible();
  await Header.clickOnLogout();
  await expect(page).toHaveURL("https://automationexercise.com/login");
})