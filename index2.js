const inquirer = require("inquirer");
const  fs = require("fs");
const employee = [];
const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const outputDirect = path.resolve(__dirname, "output");
const outputPath = path.join(outputDirect, "team.html");

const render = require("./src/html2.js");
const idArray = [];


function createTeam() {
    function man() {
    inquirer.prompt([
    {
    type: "input",
    name: "manName",
    message: "Team manager's name",
    
    },
    {
        type: "input",
        name: "manId",
        message: "what is the manager's id",
        
    },
    {
        type: "input",
        name: "manEmail",
        message: "what is man email",
        
    },
    {
        type: "input",
        name: "manOfficeNum",
        message: "what is the manager's office number",
        
    },
    ]).then(answers =>{
        const manager = new Manager(answers.manName, answers.manId, answers.manEmail, answers.manOfficeNum)
        employee.push(manager)
        idArray.push(answers.manId)
        addMem()
    })
        }


function addMem() {
    inquirer.prompt([
        {
            type: "list",
            name: "pickMe",
            message: "Which team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "No further member needed at this time",

            ]
        }
    ]).then(choice => {
        switch (choice.pickMe) {
            case "Engineer":
                addEn()
                break;
        
                case "Intern":
                addIn()
                break;
            default:
                buildTeam()
        }

    })
}

function addEn() {
    inquirer.prompt([
        {
            type: "input",
            name: "enName",
            message: "Provide name"

        },
        {
            type: "input",
            name: "enId",
            message: "Provide Id"

        },
        {
            type: "input",
            name: "enEmail",
            message: "Provide email"

        },
        {
            type: "input",
            name: "enGit",
            message: "Provide GitHub"

        }

    ]).then(answers => {
        const en = new Engineer(answers.enName, answers.enId, answers.enEmail, answers.enGit)
        employee.push(en)
        idArray.push(answers.enId)
        addMem()

    })   
}

function addIn() {
    inquirer.prompt([
        {
            type: "input",
            name: "inName",
            message: "Provide name"

        },
        {
            type: "input",
            name: "inId",
            message: "Provide Id"

        },
        {
            type: "input",
            name: "inEmail",
            message: "Provide email"

        },
        {
            type: "input",
            name: "inSchool",
            message: "Provide School's Name"

        }

    ]).then(answers => {
        const intern = new Intern(answers.inName, answers.inId, answers.inEmail, answers.inSchool)
        employee.push(intern)
        idArray.push(answers.inId)
        addMem()
    })   
}
    function buildTeam(){
        if (!fs.existsSync(outputDirect)) {
             fs.mkdirSync(outputDirect)
        }
        fs.writeFileSync(outputPath, render(employee),"utf-8")

    }
    man()
     
}
createTeam();


