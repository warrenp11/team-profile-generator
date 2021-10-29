const generateTeam = data => {
    
    const engineer = data.engineers.map(function(info) {
        let engineerHtml = `
            <div class="card">
                <div class="card-header">
                    <h5>Engineer</h5>
                </div>
                <div class="card-body">
                    <h6 class="card-title">${info.name}</h6>
                    <p class="card-text">ID: ${info.id}</p>
                    <p class="card-text">Email: ${info.email}</p>
                    <p class="card-text">GitHub: ${info.github}</p>
                </div>
            </div>
        `
        return engineerHtml;
    });
    return [engineer];
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