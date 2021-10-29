const fs = require('fs');

const writeFile = content => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', content, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'New index.html file created!'
            });
        });
    });
};

module.exports = writeFile;
