const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const team = []
createManager()

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            messaage: "what is the managers name"
        },
        {
            type: "input",
            name: "id",
            messaage: "what is the managers ID?"
        },
        {
            type: "input",
            name: "email",
            messaage: "what is the managers email?"
        },
        {
            type: "input",
            name: "officeNum",
            messaage: "what is the managers office number?"
        },
    ]).then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNum)
        team.push(manager)
        askQuestion()
    })
}
function askQuestion(){
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            messaage: "What type of team member would you like to add?",
            choices: ["Engineer", "Intern", "No more team members"]
        }
    ]).then(data => {
        switch(data.choice){
            case "Engineer":
                createEngineer()
                break
            case "Intern":
                createIntern()
                break
            default:
                buildHTML()
        }
    })
}