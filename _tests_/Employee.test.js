const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('tom', '11', 'tom@email.com');

    expect(employee.name).toBe('tom');
    expect(employee.id).toBe('11');
    expect(employee.email).toBe('tom@email.com');
});

test('gets employee name', () => {
    const employee = new Employee('tom', '11', 'tom@email.com');

    expect(employee.getName()).toEqual(expect.stringContaining('tom'));
});

test('gets employee id', () => {
    const employee = new Employee('tom', '11', 'tom@email.com');

    expect(employee.getId()).toEqual(expect.stringContaining('11'));
});

test('gets employee email', () => {
    const employee = new Employee('tom', '11', 'tom@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('tom@email.com'));
});

test('gets employee role', () => {
    const employee = new Employee('tom', '11', 'tom@email.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});