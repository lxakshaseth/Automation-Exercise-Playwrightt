import { expect, test } from "@playwright/test";
import { HeaderPage } from "./base/header";
import { HomePage } from "./pages/homePage";
import { SignUpLoginPage } from "./pages/signUpLogin";
import { SignUpInfoPage } from "./pages/signUpInfo";
const accountDetails = JSON.parse(
  JSON.stringify(require("./testData/accountDetails.json"))
);
const existingUser = JSON.parse(
  JSON.stringify(require("./testData/existingUser.json"))
);

test.beforeEach("Go to homepage", async ({ page }) => {
  const Home = new HomePage(page);
  await Home.goToHomePage();
});

test("Register User", async ({ page }) => {
  const Header = new HeaderPage(page);
  const SignUpLogin = new SignUpLoginPage(page);
  const SignUpInfo = new SignUpInfoPage(page);

  await Header.clickOnsignUpLogin();
  await page
    .getByRole("heading", { name: "New User Signup!" })
    .waitFor({ state: "visible" });
  await expect(
    page.getByRole("heading", { name: "New User Signup!" })
  ).toBeVisible();
  await SignUpLogin.enterNameSignUp(existingUser.name);
  await SignUpLogin.enterEmailSignUp(existingUser.email);
  await SignUpLogin.clickSignUp();
  await page.waitForTimeout(1000);
  await page
    .getByText("Enter Account Information")
    .waitFor({ state: "visible" });
  await expect(page.getByText("Enter Account Information")).toBeVisible();
  await SignUpInfo.verifyName(existingUser.name);
  await SignUpInfo.verifyEmail(existingUser.email);
  await SignUpInfo.fillPassword(existingUser.password);
  await SignUpInfo.selectDay(accountDetails.day);
  await page.waitForTimeout(1000);
  await SignUpInfo.selectMonth(accountDetails.month);
  await page.waitForTimeout(1000);
  await SignUpInfo.selectYear(accountDetails.year);
  await SignUpInfo.checkNewsLetter();
  await SignUpInfo.checkOffers();
  await SignUpInfo.fillFirstName(accountDetails.firstName);
  await SignUpInfo.fillLastName(accountDetails.lastName);
  await page.waitForTimeout(1000);
  await SignUpInfo.fillCompany(accountDetails.company);
  await SignUpInfo.fillAdress(accountDetails.address1);
  await SignUpInfo.fillSecondAdress(accountDetails.address2);
  await SignUpInfo.selectCountry(accountDetails.country);
  await SignUpInfo.selectState(accountDetails.state);
  await SignUpInfo.selectCity(accountDetails.city);
  await SignUpInfo.selectZipCode(accountDetails.zipcode);
  await SignUpInfo.selectMobileNumber(accountDetails.mobileNumber);
  await SignUpInfo.clickOnCreateAccount();
  await page.waitForTimeout(1000);
});

test("Register User with existing email", async ({ page }) => {
  const Header = new HeaderPage(page);
  const SignUpLogin = new SignUpLoginPage(page);

  await Header.clickOnsignUpLogin();
  await page
    .getByRole("heading", { name: "New User Signup!" })
    .waitFor({ state: "visible" });
  await expect(
    page.getByRole("heading", { name: "New User Signup!" })
  ).toBeVisible();
  await SignUpLogin.enterNameSignUp(existingUser.name);
  await SignUpLogin.enterEmailSignUp(existingUser.email);
  await SignUpLogin.clickSignUp();
  await expect(page.getByText("Email Address already exist!")).toBeVisible();
});
