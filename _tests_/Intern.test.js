const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('newbie', '00', 'intern@email.com', 'Rutgers');

    expect(intern.name).toBe('newbie');
    expect(intern.id).toBe('00');
    expect(intern.email).toBe('intern@email.com');
    expect(intern.school).toBe('Rutgers');
});

test('get intern\'s school', () => {
    const intern = new Intern('newbie', '00', 'intern@email.com', 'Rutgers');

    expect(intern.getSchool()).toEqual(expect.stringContaining('Rutgers'));
});

test('get intern\'s role', () => {
    const intern = new Intern('newbie', '00', 'intern@email.com', 'Rutgers');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});