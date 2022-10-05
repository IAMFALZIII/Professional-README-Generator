// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license) {
    return `![${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg`;
  }else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = renderLicenseBadge(data);
  return `# ${data.title}
  ## Description 
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${license}
  ## Contributing (Guidelines)
  ${data.contributions}
  ## Tests (Instructions)
  ${data.test}
  ## Questions
  ${data.username}
  Reach out to me on Github!: [GitHub](https://github.com/${data.username})
  How to reach me for additional questions: ${data.email}

`;
}

module.exports = generateMarkdown;
