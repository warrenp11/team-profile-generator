const generateTeam = data => {
    
    const engineer = data.engineers.map(function(info) {
        let engineerHtml = `
            <div class="card">
                <div class="card-header">
                <h5>Engineer <span><i class="fas fa-glasses"></i></span></h5>
                </div>
                <div class="card-body">
                    <h6 class="card-title">${info.name}</h6>
                    <p class="card-text">ID: ${info.id}</p>
                    <p class="card-text">Email: <a href='mailto:${info.email}'>${info.email}</a></p>
                    <p class="card-text">GitHub: <a href="https://github.com/${info.github}" target="_blank">${info.github}</a></p>
                </div>
            </div>
        `
        return engineerHtml;
    });
    
    const intern = data.interns.map(function(info) {
        let internHtml = `
            <div class="card">
                <div class="card-header">
                    <h5>Intern <span><i class="fas fa-user-graduate"></i></span></h5>
                </div>
                <div class="card-body">
                    <h6 class="card-title">${info.name}</h6>
                    <p class="card-text">ID: ${info.id}</p>
                    <p class="card-text">Email: <a href='mailto:${info.email}'>${info.email}</a></p>
                    <p class="card-text">School: ${info.school}</p>
                </div>
            </div>
        `
        return internHtml;
    });

    const manager = data.managers.map(function(info) {
        let managerHtml = `
            <div class="card">
                <div class="card-header">
                    <h5>Manager <span><i class="fas fa-mug-hot"></i></span></h5>
                </div>
                <div class="card-body">
                    <h6 class="card-title">${info.name}</h6>
                    <p class="card-text">ID: ${info.id}</p>
                    <p class="card-text">Email: <a href='mailto:${info.email}'>${info.email}</a></p>
                    <p class="card-text">Office: ${info.office}</p>
                </div>
            </div>
        `
        return managerHtml;
    });
    
    return [engineer, intern, manager];
};

const generatePage = data => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
            <title>My Team Generator</title>
        </head>
        <body>
            <header>
                <nav class="navbar navbar-dark bg-primary mb-5">
                    <span class="navbar-brand mb-0 h1">My Team</span>
                </nav>
            </header>
            <main>
            <div class="container">
                <div class="row">
                <div class="col-sm">
                    ${generateTeam(data)}
                </div>
                </div>
            </div>
            </main>
        </body>
        </html>
    `;
};

module.exports = generatePage;