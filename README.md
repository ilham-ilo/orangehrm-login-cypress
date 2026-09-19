# OrangeHRM Login Automation Testing

This project contains automated UI testing for the **Login feature** of the OrangeHRM Demo website using **Cypress** and **JavaScript**.

The purpose of this project is to practice and demonstrate UI automation testing by covering positive and negative login scenarios.

## Website Under Test

**OrangeHRM Demo**

https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

## Tools & Technologies

- Cypress
- JavaScript
- Node.js
- npm
- Visual Studio Code
- Git & GitHub

## Test Scenarios

This project contains 12 automated test cases for the Login feature:

| Test Case ID | Test Scenario |
|---|---|
| TC-001 | Verify that the user can log in using a valid username and password |
| TC-002 | Verify login using an invalid username and valid password |
| TC-003 | Verify login using a valid username and invalid password |
| TC-004 | Verify login using an invalid username and invalid password |
| TC-005 | Verify login when both username and password fields are empty |
| TC-006 | Verify login when the username field is empty |
| TC-007 | Verify login when the password field is empty |
| TC-008 | Verify login using spaces only in the username and password fields |
| TC-009 | Verify login using valid credentials with leading and trailing spaces |
| TC-010 | Verify login using a valid username with different letter capitalization |
| TC-011 | Verify login using a valid password with different letter capitalization |
| TC-012 | Verify that characters entered in the password field are masked |

## Test Coverage

The automated tests cover:

- Valid login
- Invalid username
- Invalid password
- Empty username and password
- Required field validation
- Whitespace input
- Leading and trailing spaces
- Username capitalization
- Password capitalization
- Password masking
- Successful Dashboard redirection
- Invalid credential error handling

## Project Structure

    cypress/
    ├── e2e/
    │   └── testcase.cy.js
    ├── fixtures/
    └── support/
    cypress.config.js
    package.json
    package-lock.json
    README.md

## Prerequisites

Before running this project, make sure the following are installed:

- Node.js
- npm
- Git

## Installation

Clone this repository:

```bash
git clone https://github.com/ilham-ilo/orangehrm-login-cypress.git
```

Navigate to the project directory:

```bash
cd orangehrm-login-cypress
```

Install the project dependencies:

```bash
npm install
```

## Running the Tests

### Open Cypress Test Runner

Run Cypress in interactive mode:

```bash
npx cypress open
```

Then:

1. Select **E2E Testing**
2. Choose a browser
3. Click **Start E2E Testing**
4. Select `testcase.cy.js`

### Run in Headless Mode

To run all Cypress tests:

```bash
npx cypress run
```

To run only the Login test file:

```bash
npx cypress run --spec "cypress/e2e/testcase.cy.js"
```

## Test Credentials

The valid credentials provided by the OrangeHRM Demo website are:

```text
Username: Admin
Password: admin123
```

## Notes

- This project focuses only on the **Login feature**.
- The test suite contains both positive and negative test scenarios.
- OrangeHRM is a public demo application, so application behavior and test data may change over time.

## Repository

https://github.com/ilham-ilo/orangehrm-login-cypress

## Author

**Ilham**

QA Automation Practice Project
