# Automation Exercise Playwright

End-to-end browser tests for [Automation Exercise](https://automationexercise.com/) built with **Playwright** and **JavaScript**. The project uses reusable page objects and JSON fixtures to exercise common account and contact workflows.

## Test coverage

- Register a new user and check registration with an existing email.
- Log in with valid and invalid credentials.
- Log out of an existing account.
- Submit the contact form with a file attachment.
- Navigate to the Test Cases page.

The configuration includes **Chromium, Firefox, and WebKit**, HTML reports, and traces on the first retry. There are seven tests across five spec files (21 configured browser/test combinations). The Test Cases page scenario currently performs navigation without a final assertion.

## Getting started

Install Node.js with npm and Git, then run:

```sh
git clone https://github.com/lxakshaseth/automation-exercise-playwright.git
cd automation-exercise-playwright
npm ci
npx playwright install
```

On Linux environments that need browser system dependencies, use `npx playwright install --with-deps`.

## Running tests

```sh
# Run all configured browsers
npx playwright test

# Run Chromium only
npx playwright test --project=chromium

# Run with a visible browser
npx playwright test --project=chromium --headed

# Run one spec
npx playwright test tests/LoginUser.spec.js --project=chromium

# Open interactive UI mode
npx playwright test --ui

# List tests without running browsers
npx playwright test --list

# View the HTML report after a run
npx playwright show-report
```

## Project structure

```text
tests/
  base/                  Shared header navigation
  pages/                 Page objects and reusable actions
  testData/              JSON fixtures and sample upload file
  ContactUsForm.spec.js
  LoginUser.spec.js
  LogoutUser.spec.js
  RegisterUser.spec.js
  TestCases.spec.js
tests-examples/           Playwright demo (outside the configured test directory)
playwright.config.js     Browser projects, reporting, and retry configuration
```

## Test data and current limitations

- `tests/testData/existingUser.json` holds the shared demo account. Valid login, logout, and duplicate-email checks require that account to exist on the website. Use only disposable test credentials.
- The new-user registration test uses the same email and requires it to be unused. The suite has no automatic account cleanup or dependency ordering, so a full run is not isolated or reliably repeatable. Run scenarios with appropriate account state; registration across multiple browsers also needs distinct accounts or cleanup.
- `tests/testData/accountDetails.json` supplies registration details; `contactForm.json` supplies the contact form values.
- The contact test currently references `./testData/sample.txt`, but the checked-in file is `tests/testData/sample.txt`. Update the path in `tests/ContactUsForm.spec.js` before running that scenario from the repository root. Its submission flow may also require explicit handling of the website's confirmation dialog.
- Tests depend on the live website and contain fixed waits. Website changes, advertisements, and network latency can affect results.

## Reports and configuration

The HTML report is written to `playwright-report/`, and test artifacts are stored in `test-results/`. Both are ignored by Git. CI runs use one worker and two retries; local runs have no retries by default. The configuration disables fully parallel execution, but separate files may still run in parallel locally. Add `--workers=1` when you need sequential execution; this does not resolve shared-account dependencies.

Dependencies are pinned by `package-lock.json`; use `npm ci` for reproducible installation.
