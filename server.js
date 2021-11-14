const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const mysql = require("mysql2");
const { exit } = require("process");
var connection = mysql.createConnection({
    host:"localhost",
    "user":"root",
    "password":"Root",
    "database": "employeetracker-db",

})
connection.connect(error => {
    if(error) throw error;
choices();
})

function choices(){
inquirer.prompt([
    {
        type: "list",
        name: "title",
        choices: ["Add Employee","Add Department","Add Role","View Department", "View Employee", "View Role", "Exit App"],
        message: "Success"
    }
]).then(({title} )=> {
     switch(title){
         case "Add Employee": 
         addEmployee();
         break
         case "Add Department": 
         addEmployee();
         break
         case "Add Role": 
         addEmployee();
         break
         case "View Department": 
         addEmployee();
         break
         case "View Employee": 
         addEmployee();
         break
         case "View Role": 
         addEmployee();
         break
         case "Exit App": 
         addEmployee();
         break
     }
} )
}