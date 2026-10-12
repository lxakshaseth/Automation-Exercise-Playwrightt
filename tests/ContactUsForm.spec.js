import { expect, test } from "@playwright/test";
import { HomePage } from "./pages/homePage";
import { HeaderPage } from "./base/header";
import { ContactUsPage } from "./pages/contacUsPage";
const contactFormData = JSON.parse(
  JSON.stringify(require("./testData/contactForm.json"))
);
const filePath = "./testData/sample.txt";

test("Test contact us form", async ({ page }) => {
  const Home = new HomePage(page);
  const Header = new HeaderPage(page);
  const ContactUs = new ContactUsPage(page);

  await Home.goToHomePage();
  await Header.clickOnContactUs();
  await page.getByText("Get In Touch").waitFor({ state: "visible" });
  await expect(page.getByText("Get In Touch")).toBeVisible();
  await ContactUs.fillName(contactFormData.name);
  await ContactUs.fillEmail(contactFormData.email);
  await ContactUs.fillSubject(contactFormData.subject);
  await ContactUs.fillMessage(contactFormData.message);
  await ContactUs.uploadFile(filePath);
  await ContactUs.clickOnSubmit();
  await page.waitForTimeout(10000);
  await page.locator('#contact-page').getByText('Success! Your details have').waitFor({state:"visible"});
  await expect( page.locator('#contact-page').getByText('Success! Your details have')).toBeVisible();
  await ContactUs.clickOnHomeButton();
  await page.waitForTimeout(10000);
});
