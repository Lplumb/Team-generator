const Employee = require ("../lib/Employee")

test("Can create an object out of the employee constructor", () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe("object")
})

test("Can set a name in the constructor", () => {
    const name = "Lucas"
    const employee = new Employee(name)
    expect(employee.name).toBe(name)
})

test("Can set ID in the constructor", () => {
    const name = "Lucas"
    const id = 3
    const employee = new Employee(name, id)
    expect(employee.id).toBe(id)
})

test("Can set email in the constructor", () => {
    const name = "Lucas"
    const id = 3
    const email = "email@email.com"
    const employee = new Employee(name, id, email)
    expect(employee.email).toBe(email)
})