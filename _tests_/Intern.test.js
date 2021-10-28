const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('newbie', '00', 'intern@email.com', 'Rutgers');

    expect(intern.name).toBe('newbie');
    expect(intern.id).toBe('00');
    expect(intern.email).toBe('intern@email.com');
    expect(intern.school).toBe('Rutgers');
});