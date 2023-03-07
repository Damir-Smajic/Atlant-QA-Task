# Cypress Test Suite
This repository contains a test suite built with Cypress for testing ToolsQA Demi Site. This README will guide you through how to set up the project and run the tests.

# Prerequisites
Before running the tests, you must have the following installed on your machine:

Node.js (https://nodejs.org/en/)

Git (https://git-scm.com/downloads)

# Installation
1. Clone the repository to your local machine using Git:<br />
```git clone https://github.com/Damir-Smajic/atlant-qa-task.git```

2. Navigate to the project directory:<br />
```cd atlant-qa-task```

3. Install the project dependencies:<br />
```npm install```

# Running the Tests
To run the tests, use the following command:
1. Open Cypress runner <br />
```npx cypress open```
2. select Chrome as your execution browser
3. click on the e2e test called shopDemoQa.cy.js

## Note
Test data can be found in ```cypress\fixtures\shopDemoQa.json``` <br />
In order to rerun the tests, changing username and email is needed to avoid test failing.

# Test Cases

Test cases can be found in 3 iles in the repository:<br />
```Atlant - Registration Test Cases```<br />
```Atlant - Login Test Cases```<br />
```Atlant - Product Purchase Test Cases```<br />

Defect report can be found in file called:<br />
```Atlant - Defect Reports.xlsx```<br />
