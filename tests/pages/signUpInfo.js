const { expect } = require("@playwright/test");

exports.SignUpInfoPage = class SignUpInfoPage {
  constructor(page) {
    this.page = page;
    this.mrTitle = page.getByLabel("Mr.");
    this.name = page.getByLabel("Name *", { exact: true });
    this.email = page.getByLabel("Email *", { exact: true });
    this.passwordTextBox = page.getByLabel("Password *", { exact: true });
    this.dayDate = page.locator("#days");
    this.monthDate = page.locator("#months");
    this.yearDate = page.locator("#years");
    this.newsletterCheckBox = page.locator("#newsletter");
    this.offersCheckBox = page.locator("#optin");
    this.firstName = page.getByLabel("First name *", { exact: true });
    this.lastName = page.getByLabel("Last name *", { exact: true });
    this.company = page.getByLabel("Company", { exact: true });
    this.adress = page.getByLabel("Address *");
    this.adressSecond = page.getByLabel("Address 2");
    this.countryChoice = page.getByLabel("Country *");
    this.stateChoice = page.getByLabel("State *");
    this.cityChoice = page.getByLabel("City *");
    this.zipCodeChoice = page.locator("#zipcode");
    this.mobileNumberChoice = page.getByLabel("Mobile Number *");
    this.createAccountButton = page.getByRole("button", {
      name: "Create Account",
    });
  }

  async selectTitle() {
    await this.mrTitle.waitFor({ state: "visible" });
    await expect(this.mrTitle).toBeVisible();
    await this.mrTitle.check();
  }

  async verifyName(name) {
    await expect(this.name).toHaveValue(name);
  }

  async verifyEmail(email) {
    await expect(this.email).toHaveValue(email);
  }

  async fillPassword(password) {
    await this.passwordTextBox.waitFor({ state: "visible" });
    await expect(this.passwordTextBox).toBeVisible();
    await this.passwordTextBox.fill(password);
  }

  async selectDay(day) {
    await this.dayDate.waitFor({ state: "visible" });
    await expect(this.dayDate).toBeVisible();
    await this.dayDate.selectOption(day);
  }

  async selectMonth(month) {
    await this.monthDate.waitFor({ state: "visible" });
    await expect(this.monthDate).toBeVisible();
    await this.monthDate.selectOption(month);
  }

  async selectYear(year) {
    await this.yearDate.waitFor({ state: "visible" });
    await expect(this.yearDate).toBeVisible();
    await this.yearDate.selectOption(year);
  }

  async checkNewsLetter() {
    await this.newsletterCheckBox.waitFor({ state: "visible" });
    await expect(this.newsletterCheckBox).toBeVisible();
    await this.newsletterCheckBox.check();
  }

  async checkOffers() {
    await this.offersCheckBox.waitFor({ state: "visible" });
    await expect(this.offersCheckBox).toBeVisible();
    await this.offersCheckBox.check();
  }

  async fillFirstName(firstName) {
    await this.firstName.waitFor({ state: "visible" });
    await expect(this.firstName).toBeVisible();
    await this.firstName.fill(firstName);
  }

  async fillLastName(lastName) {
    await this.lastName.waitFor({ state: "visible" });
    await expect(this.lastName).toBeVisible();
    await this.lastName.fill(lastName);
  }

  async fillCompany(companyName) {
    await this.company.waitFor({ state: "visible" });
    await expect(this.company).toBeVisible();
    await this.company.fill(companyName);
  }

  async fillAdress(adressName) {
    await this.adress.waitFor({ state: "visible" });
    await expect(this.adress).toBeVisible();
    await this.adress.fill(adressName);
  }

  async fillSecondAdress(adressName) {
    await this.adressSecond.waitFor({ state: "visible" });
    await expect(this.adressSecond).toBeVisible();
    await this.adressSecond.fill(adressName);
  }

  async selectCountry(country) {
    await this.countryChoice.waitFor({ state: "visible" });
    await expect(this.countryChoice).toBeVisible();
    await this.countryChoice.selectOption(country);
  }
  async selectState(state) {
    await this.stateChoice.waitFor({ state: "visible" });
    await expect(this.stateChoice).toBeVisible();
    await this.stateChoice.fill(state);
  }
  async selectCity(city) {
    await this.cityChoice.waitFor({ state: "visible" });
    await expect(this.cityChoice).toBeVisible();
    await this.cityChoice.fill(city);
  }
  async selectZipCode(zipCode) {
    await this.zipCodeChoice.waitFor({ state: "visible" });
    await expect(this.zipCodeChoice).toBeVisible();
    await this.zipCodeChoice.fill(zipCode);
  }

  async selectMobileNumber(mobileNumber) {
    await this.mobileNumberChoice.waitFor({ state: "visible" });
    await expect(this.mobileNumberChoice).toBeVisible();
    await this.mobileNumberChoice.fill(mobileNumber);
  }

  async clickOnCreateAccount() {
    await this.createAccountButton.waitFor({ state: "visible" });
    await expect(this.createAccountButton).toBeVisible();
    await this.createAccountButton.click();
  }
};
