# Team Profile Generator
![Code badge](https://img.shields.io/github/languages/top/warrenp11/professional-readme-generator) 
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Credits](#credits)
* [Project Insight](#project-insight)
* [Questions](#questions)
* [License](#license)

## Description
This project was designed as a homework assignment for Rutgers Coding Boot Camp. We were required to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Additionally, we were required to write unit tests for each part of our code and ensure that it passes all of the tests. 

No starter code was provided for this assignment.

        Acceptance Criteria

        GIVEN a command-line application that accepts user input
        WHEN I am prompted for my team members and their information
        THEN an HTML file is generated that displays a nicely formatted team roster based on user input
        WHEN I click on an email address in the HTML
        THEN my default email program opens and populates the TO field of the email with the address
        WHEN I click on the GitHub username
        THEN that GitHub profile opens in a new tab
        WHEN I start the application
        THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
        WHEN I enter the team manager’s name, employee ID, email address, and office number
        THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
        WHEN I select the engineer option
        THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
        WHEN I select the intern option
        THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
        WHEN I decide to finish building my team
        THEN I exit the application, and the HTML is generated

## Installation
1. Copy one of the clone links from the GitHub [repository](https://www.github.com/warrenp11/team-profile-generator)
* HTTPS `https://github.com/warrenp11/team-profile-generator.git`
* SSH  `git@github.com:warrenp11/team-profile-generator.git` 

2. In a new Bash or Terminal Window, navigate to the directory where the repository will be added

3. Clone the repository with the following command:

           git clone <username@host:/path/to/repository>

4. Open repository in preferred code editor

5. In the terminal, navigate to the root folder, and install the dependencies with the command:

           npm i

>*Make sure the following packages are installed prior to running the application:*
>* Inquirer
>* Jest


## Usage
When you're ready to run the application, from the root directory enter the following command into your command line:

           node index

Enter all the information for the employee and add as many additional employees as desired

Once user has added all members an `index.html` file will be created in the `dist/` folder showing all employees that were added

**{recording of application in use}**

## Tests
To run the tests for this application, enter the following command from the root directory:

            npm run test

## Credits
[Inquirer](https://www.npmjs.com/package/inquirer)

[Node.js](https://nodejs.org/en/docs/)

## Project Insight
Setting up the project presented a new challenge for me. I wasn't quite sure how to go about setting up the project directory, but thankfully some suggestions were made to us that pointed me in the right direction. Another challenge was the testing of the different constructor functions for each class. The process of testing in a 'red light, green light" manner is entirely new to me.


## Questions
If you have any questions about this project contact me directly at warrenp11@gmail.com. 
  
Visit this project's repository at https://www.github.com/warrenp11/team-profile-generator

View more of my projects at https://www.github.com/warrenp11

## License
Licensed under the [MIT](./license.txt/) license.