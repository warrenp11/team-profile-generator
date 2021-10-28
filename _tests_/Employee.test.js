const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('tom', '11', 'tom@email.com');

    expect(employee.name).toBe('tom');
    expect(employee.id).toBe('11');
    expect(employee.email).toBe('tom@email.com');
});