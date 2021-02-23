const inquirer = require("inquirer")
const fs = require('fs')
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const html = require("./lib/generateHTML")
const generateHTML = require("./lib/generateHTML")
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
function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            messaage: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            messaage: "what is the intern's ID?"
        },
        {
            type: "input",
            name: "email",
            messaage: "what is the intern email?"
        },
        {
            type: "input",
            name: "school",
            messaage: "What school is the intern attending?"
        },
    ]).then(data => {
        const intern = new Intern(data.name, data.id, data.email, data.school)
        team.push(intern)
        askQuestion()
    })
}
function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            messaage: "What is the engineer name?"
        },
        {
            type: "input",
            name: "id",
            messaage: "what is the engineer ID?"
        },
        {
            type: "input",
            name: "email",
            messaage: "what is the engineer email?"
        },
        {
            type: "input",
            name: "github",
            messaage: "What is the engineers github?"
        },
    ]).then(data => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github)
        team.push(engineer)
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

function buildHTML() {
    let htmlContent = generateHTML(team)
    fs.writeFile('./output/index.html', htmlContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
}