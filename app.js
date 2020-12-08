const inquirer = require("inquirer")
const mysql = require("mysql")

const connection = mysql.createConnection( {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "",

});

connection.connect((err) => {
    if (err) throw err;
    console.log("Welcome");
});

const startMenu = function() {
    inquirer.prompt ({
        type: "list",
        message: "Please choose how you would like to proceed",
        name: "select",
        choices: [
            "View all employees",
            "View all employees by department",
            "Add employee",
            "Remove employee",
            "Update employees role",
            "Update employee manager",
            "View all roles",
            "Add role",
           
            "Add department",
            "Delete employee",
            "Delete role",
            "Delete department",

            
        ]
    })
} 