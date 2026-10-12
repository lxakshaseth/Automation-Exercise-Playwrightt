import { expect } from "@playwright/test";

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
  }

  async goToHomePage() {
    await this.page.goto("https://automationexercise.com/", {
      waituntill: "domcontentloaded",
    });
    await expect(this.page).toHaveURL("https://automationexercise.com/");
  }
};
