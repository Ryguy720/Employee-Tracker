const inquirer = require("inquirer");
require("console.table")
const mysql = require("mysql2");
const { type } = require("os");

var connection = mysql.createConnection({
    host:"localhost",
    "user":"root",
    "password":"Root",
    "database": "employeetracker_db",

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
         addDepartment();
         break
         case "Add Role": 
         addEmployee();
         break
         case "View Department": 
         viewDepartment();
         break
         case "View Employee": 
         viewEmployee();
         break
         case "View Role": 
         viewRole();
         break
         case "Exit App": 
         exitApp();
         break
     }
} )
}
function viewEmployee(){
    connection.query("select * From Employee;",(err,data) => {
        if(err) throw err;
        console.table(data)
        choices();
    })
}

function viewDepartment(){
    connection.query("select * From Department;",(err,data) => {
        if(err) throw err;
        console.table(data)
        choices();
    })
}
function viewRole(){
    connection.query("select * From Role;",(err,data) => {
        if(err) throw err;
        console.table(data)
        choices();
    })
    
}
function exitApp(){
    connection.query("",(err,data) => {
        if(err) throw err;
        console.table(data)
        choices();
    })
    
}
// function to add Employee
function addEmployee(){
    inquirer.prompt([{
        name: "First name",
        type: "input",
        message: "Enter First Name",

    },{
        name: "Last Name",
        type: "input",
        message: "Enter Last Name",

    },
    {
        name: "Role_id",
        type: "input",
        message: "Enter employee Role",

    }])
    connection.query("UPDATE * From Employee;",(err,data) => {
        if(err) throw err;
        console.table(data)
        choices();
    })
}

// function to add Department
function addDepartment(){
    inquirer.prompt([{
        name: "Department name",
        type: "input",
        message: "Enter Department Name",

    },
])
    connection.query("select * From department;",(err,data) => {
        if(err) throw err;
        console.table(data)
        choices();
    })
}