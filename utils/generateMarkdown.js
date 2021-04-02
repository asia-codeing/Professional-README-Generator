//Function to generate markdown for README
function generateMarkdown(userInput) {
  return `# ${userInput.title}
  [![licensing](https://img.shields.io/badge/license-${userInput.licensing}-brightgreen)](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository#searching-github-by-license-type)

  ## Description:
  ${userInput.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${userInput.installation}

  ## Usage
  ${userInput.usage}

  ## License
  This project is convered under the ${userInput.licensing}

  ## Contributing
  ${userInput.contributing}
 
  ## Tests
  ${userInput.tests}

  ## Questions
  For any questions, additional help or questions about collaboration, please contact me with the information below:

  * GitHub: [GitHub-Profile](https://github.com/${userInput.username})
  * Email: ${userInput.email}

`;
}

module.exports = generateMarkdown;
