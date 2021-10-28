const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('bob', '001', 'bob@email.com', 'getbobsgit');

    expect(engineer.name).toBe('bob');
    expect(engineer.id).toBe('001');
    expect(engineer.email).toBe('bob@email.com');
    expect(engineer.github).toBe('getbobsgit');
});

test('gets engineer\'s github username', () => {
    const engineer = new Engineer('bob', '001', 'bob@email.com', 'getbobsgit');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('getbobsgit'));
});

test('get engineer\'s role', () => {
    const engineer = new Engineer('bob', '001', 'bob@email.com', 'getbobsgit');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});