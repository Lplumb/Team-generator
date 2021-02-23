const Engineer = require ("../lib/Engineer")

test("Can create an object out of the employee constructor", () => {
    const engineer = new Engineer()
    expect(typeof(engineer)).toBe("object")
})

test("Can set a name in the constructor", () => {
    const name = "Lucas"
    const engineer = new Engineer(name)
    expect(engineer.name).toBe(name)
})

test("Can set ID in the constructor", () => {
    const name = "Lucas"
    const id = 3
    const engineer = new Engineer(name, id)
    expect(engineer.id).toBe(id)
})

test("Can set email in the constructor", () => {
    const name = "Lucas"
    const id = 3
    const email = "email@email.com"
    const engineer = new Engineer(name, id, email)
    expect(engineer.email).toBe(email)
})

test("Can set email in the constructor", () => {
    const name = "Lucas"
    const id = 3
    const email = "email@email.com"
    const engineer = new Engineer(name, id, email)
    expect(engineer.email).toBe(email)
})

test("Can set email in the constructor", () => {
    const name = "Lucas"
    const id = 3
    const email = "email@email.com"
    const github = "lplumb"
    const engineer = new Engineer(name, id, email, github)
    expect(engineer.github).toBe(github)
})