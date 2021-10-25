
const inquirer = require("inquirer");
const  fs = require("fs");
const employee = [];
const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const myTeam = require("./src/HTML.js");


function managerOnly(){
    inquirer.prompt({type: "list",
    message: "Are you the Manager? Please select Y or N",
    choices: ["Y", "N"]})
    
}


function makeTeam() {
   
    inquirer.prompt([
    {type: "list",
    message: "Are you the Manager? Please select Y or N",
    choices: ["Y", "N"]},
    {
        type: "input",
        message: "Provide team member's name?",
        name: "name"
    },
    {
        type: "list",
        message: "select team member's role",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role"
    },
    {
        type: "input",
        message: "Provide team member's ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Provide Email.",
        name: "email"
    },
]) 
.then(function({name, role, id, email}) {
    const position = "";
    if (role === "Manager") {
        position = `${data.getOfficenumber()} `
    }
    if (role === "Engineer") {
        position = `${data.getGithub()}`
    }
    if (role === "Intern") {
        position = `${data.getSchool()}`
    }
})

inquirer.prompt([{
        type: "input",
        message: `Please Provide team member's${position}`,
        name: "position"
    },
    {
        type: "list",
        message: "would you like to add additional team members?",
        choices: ["Absolutly!!", "This team is complete"],
        name: "addition"
    },
])
.then(function({position, addition}) {
    if (role ===" Manager") {
        addition = new Manager(name, id, email, position);
    }
    if (role ===" Engineer") {
        addition = new Engineer(name, id, email, position);
    }else{
        addition = new Intern(name, id, email, position);
    }
    employee.push(addition);
            myTeam(addition)
            .then(function() {
                if (position === "Absolutly!!"){
                    then(function writeToFile(fileName, data) {
                        fs.writeFile(fileName,data, function(err) {
                            if (err){ 
                            }
                            console.log("Success!!")        
                    })
                })

function init() {
    inquirer.prompt(makeTeam())
    .then(function(data) {
        console.log(data);
        writeToFile(`index.html`, myTeam(data));
    })     
    }

    init();