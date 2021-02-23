const Manager = require ("../lib/Manager")

test("Can create an object out of the employee constructor", () => {
    const manager = new Manager()
    expect(typeof(manager)).toBe("object")
})

test("Can set a name in the constructor", () => {
    const name = "Lucas"
    const manager = new Manager(name)
    expect(manager.name).toBe(name)
})

test("Can set ID in the constructor", () => {
    const name = "Lucas"
    const id = 3
    const manager = new Manager(name, id)
    expect(manager.id).toBe(id)
})

test("Can set email in the constructor", () => {
    const name = "Lucas"
    const id = 3
    const email = "email@email.com"
    const manager = new Manager(name, id, email)
    expect(manager.email).toBe(email)
})

test("Can set email in the constructor", () => {
    const name = "Lucas"
    const id = 3
    const email = "email@email.com"
    const manager = new Manager(name, id, email)
    expect(manager.email).toBe(email)
})

test("Can set email in the constructor", () => {
    const name = "Lucas"
    const id = 3
    const email = "email@email.com"
    const officeNum = "8"
    const manager = new Manager(name, id, email, officeNum)
    expect(manager.officeNum).toBe(officeNum)
})