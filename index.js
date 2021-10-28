const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee\'s ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee\'s email?'
        }
    ])
    .then((answers) => {
        console.log(answers);
    })