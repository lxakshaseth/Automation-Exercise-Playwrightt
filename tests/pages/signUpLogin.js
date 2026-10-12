const { expect } = require("@playwright/test");

exports.SignUpLoginPage = class SignUpLoginPage {
  constructor(page) {
    this.page = page;
    this.newUserHeader = page.getByRole("header", { name: "New User Signup!" });
    this.nameSignUp = page.getByPlaceholder("Name");
    this.emailSignUp = page
      .locator("form")
      .filter({ hasText: "Signup" })
      .getByPlaceholder("Email Address");
    this.signUpButton = page.getByRole("button", { name: "Signup" });
    this.emailLogin =    page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
    this.passwordLogin = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async enterNameSignUp(name) {
    await this.nameSignUp.waitFor({ state: "visible" });
    await expect(this.nameSignUp).toBeVisible();
    await this.nameSignUp.fill(name);
  }

  async enterEmailSignUp(email) {
    await this.emailSignUp.waitFor({ state: "visible" });
    await expect(this.emailSignUp).toBeVisible();
    await this.emailSignUp.fill(email);
  }

  async clickSignUp() {
    await this.signUpButton.waitFor({ state: "visible" });
    await expect(this.signUpButton).toBeVisible();
    await this.signUpButton.click();
  }

  async enterEmailLogin(email) {
    await this.emailLogin.waitFor({ state: "visible" });
    await expect(this.emailLogin).toBeVisible();
    await this.emailLogin.fill(email);
  }

  async enterPasswordLogin(password) {
    await this.passwordLogin.waitFor({ state: "visible" });
    await expect(this.passwordLogin).toBeVisible();
    await this.passwordLogin.fill(password);
  }

  async clickOnLogin() {
    await this.loginButton.waitFor({ state: "visible" });
    await expect(this.loginButton).toBeVisible();
    await this.loginButton.click();
  }
};
