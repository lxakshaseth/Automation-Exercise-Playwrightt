import { expect, test } from "@playwright/test";
import { HomePage } from "./pages/homePage";
import { HeaderPage } from "./base/header";
import { SignUpLoginPage } from "./pages/signUpLogin";
const existingUser = JSON.parse(JSON.stringify(require('./testData/existingUser.json')));


test.beforeEach("Go to homepage", async ({ page }) => {
  const Home = new HomePage(page);
  await Home.goToHomePage();
});

test("Verify Login User with valid email and password", async ({ page }) => {
  const Header = new HeaderPage(page);
  const SignUpLogin = new SignUpLoginPage(page);

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
});

test("Login User with incorrect email and password", async ({ page }) => {
  const Header = new HeaderPage(page);
  const SignUpLogin = new SignUpLoginPage(page);
  await Header.clickOnsignUpLogin();
  await page
    .getByRole("heading", { name: "Login to your account" })
    .waitFor({ state: "visible" });
  await expect(
    page.getByRole("heading", { name: "Login to your account" })
  ).toBeVisible();
  await SignUpLogin.enterEmailLogin("test@test.com");
  await SignUpLogin.enterPasswordLogin("4356");
  await SignUpLogin.clickOnLogin();
  await page
    .getByText("Your email or password is incorrect!")
    .waitFor({ state: "visible" });
  await expect(
    page.getByText("Your email or password is incorrect!")
  ).toBeVisible();
  await page.waitForTimeout(1000);
});
