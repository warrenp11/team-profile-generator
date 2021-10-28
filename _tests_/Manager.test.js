const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('dave', '1031', 'dave@email.com', '237');

    expect(manager.name).toBe('dave');
    expect(manager.id).toBe('1031');
    expect(manager.email).toBe('dave@email.com');
    expect(manager.office).toBe('237');
});

test('gets manager role', () => {
    const manager = new Manager('dave', '1031', 'dave@email.com', '237');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});