const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const init = () => {
    this.engineer = [];
    this.intern = [];

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is this employee\'s name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is this employee\'s ID?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is this employee\'s email?'
            },
            {
                type: 'list',
                name: 'role',
                message: 'What is this employee\'s role?',
                choices: ['Engineer', 'Intern', 'Manager']
            }
        ])
        .then(({name, id, email, role}) => {

            // IF 'Engineer' is chosen
                // THEN ask for github username
                // THEN add github username to Engineer object
            // ELSE IF 'Intern' is chosen
                // THEN ask for school
                // THEN add school to Intern object
            // ELSE 'Manager' is chosen
                // THEN ask for office number
                // THEN add office number to Manager object

            if (role === 'Engineer') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'github',
                            message: 'What is this employee\'s GitHub username?'
                        }
                    ])
                    .then(({github}) => {
                        this.engineer.push(new Engineer(name, id, email, github));
                        console.log(this.engineer);
                    });
            } else if (role === 'Intern') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'school',
                            message: 'What is this employee\'s school?'
                        }
                    ])
                    .then(({school}) => {
                        this.intern.push(new Intern(name, id, email, school));
                        console.log(this.intern);
                    });
            }
            
            
        });
};

init();