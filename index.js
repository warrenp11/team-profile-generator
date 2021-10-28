const inquirer = require('inquirer');

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
            console.log({name, id, email, role});

            // IF 'Engineer' is chosen
                // THEN ask for github username
                // THEN add github username to employee object

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
                        console.log({github});
                    })
            }

            
            // IF 'Intern' is chosen...
                // THEN ask for school...
            // IF 'Manager' is chosen...
                // THEN ask for office number...
        });
};

init();