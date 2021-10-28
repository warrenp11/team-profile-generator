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
                        },
                        {
                            type: 'confirm',
                            name: 'addEmployee',
                            message: 'Would you like to add another employee?',
                            default: false
                        }
                    ])
                    .then(({github, addEmployee}) => {
                        employees.push(new Engineer(name, id, email, github));
                        console.log(employees);

                        if (addEmployee) {
                            return init();
                        }
                    });
            } else if (role === 'Intern') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'school',
                            message: 'What is this employee\'s school?'
                        },
                        {
                            type: 'confirm',
                            name: 'addEmployee',
                            message: 'Would you like to add another employee?',
                            default: false
                        }
                    ])
                    .then(({school, addEmployee}) => {
                        employees.push(new Intern(name, id, email, school));
                        console.log(employees);

                        if (addEmployee) {
                            return init();
                        }
                    });
            } else if (role === 'Manager') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'office',
                            message: 'What is this employee\'s office number?'
                        },
                        {
                            type: 'confirm',
                            name: 'addEmployee',
                            message: 'Would you like to add another employee?',
                            default: false
                        }
                    ])
                    .then(({office, addEmployee}) => {
                        employees.push(new Manager(name, id, email, office));
                        console.log(employees);

                        if (addEmployee) {
                            return init();
                        }
                    });
            }
        });
};

init();