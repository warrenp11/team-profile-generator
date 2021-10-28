const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let employees = [];

const init = () => {
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
                        // this.engineer.push(new Engineer(name, id, email, github));
                        // console.log(this.engineer);
                        employees.push(new Engineer(name, id, email, github));
                        console.log(employees);
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
                        employees.push(new Intern(name, id, email, school));
                        console.log(employees);
                    });
            } else if (role === 'Manager') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'office',
                            message: 'What is this employee\'s office number?'
                        }
                    ])
                    .then(({office}) => {
                        employees.push(new Manager(name, id, email, office));
                        console.log(employees);
                    });
            }
        });
};

init();