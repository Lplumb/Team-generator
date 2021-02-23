const Intern = require ("../lib/Intern")

test("Can create an object out of the employee constructor", () => {
    const intern = new Intern()
    expect(typeof(intern)).toBe("object")
})

test("Can set a name in the constructor", () => {
    const name = "Lucas"
    const intern = new Intern(name)
    expect(intern.name).toBe(name)
})

test("Can set ID in the constructor", () => {
    const name = "Lucas"
    const id = 3
    const intern = new Intern(name, id)
    expect(intern.id).toBe(id)
})

test("Can set email in the constructor", () => {
    const name = "Lucas"
    const id = 3
    const email = "email@email.com"
    const intern = new Intern(name, id, email)
    expect(intern.email).toBe(email)
})

test("Can set email in the constructor", () => {
    const name = "Lucas"
    const id = 3
    const email = "email@email.com"
    const intern = new Intern(name, id, email)
    expect(intern.email).toBe(email)
})

test("Can set email in the constructor", () => {
    const name = "Lucas"
    const id = 3
    const email = "email@email.com"
    const school = "lplumb"
    const intern = new Intern(name, id, email, school)
    expect(intern.school).toBe(school)
})