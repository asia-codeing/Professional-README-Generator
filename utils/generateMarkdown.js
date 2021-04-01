// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
  return `# ${userInput.title}
  
  ## Description:
  ${userInput.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Contributors](#contributors)
  * [License](#license)
  * [Contact-info](#contact-info)
  
  ## Installation
  ${userInput.installation}

  ## Usage
  ${userInput.usage}

  ## License
  [![license](https://img.shields.io/badge/license-${userInput.licensing}-brightgreen)](https://shields.io)

  ## Contributing
  ${userInput.contributing}
 
  ## Tests
  ${userInput.tests}

  
  ## Questions
  For any questions, additional help or questions about collaboration, please contact me with the information below:

  * GitHub: [GitHub-Profile](https://github.com/${userInput.username})
  * Portfolio: ${userInput.portfolio}
  * Email: ${userInput.email}

`;
}

module.exports = generateMarkdown;
