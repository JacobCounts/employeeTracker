const inquirer = require("inquirer");
const mysql = require("mysql");
const connection = require("./connection");


// Start the application 
init();


async function init() {
    const { action } = await inquirer.prompt ({
        type: "list",
        message: "Please choose how you would like to proceed",
        name: "action",
        choices: [
            "View All Employees",
            "View All Employees By Department",
            "View All Employees By Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Position",
            "Update Employee Manager",
            "View Department",
            "Add Department",
            "Remove Department",
            "Exit",
        ]
    });
            


    switch (action) {
        case "View All Employees":
            viewEmployees();
            break;
        case "View Employees By Department":
            allEmpByDept();
            break;
        case "View Employees By Manager":
            viewEmployeeByManager();
            break;
        case "Add Employee":
            addEmp();
            break;
        case "Remove Employee":
            removeEmp();
            break;
        case "Update Employee Position":
            updateEmpPosition();
            break;
        case "Update Employee Manager":
            updateEmpManager();
            break;
        case "View Department":
            viewDepartment();
            break;       
        case "Add Department":
            addDepartment();
            break;
        case "Remove Department":
            removeDepartment();
            break;
        case "Exit":
            process.exit(0);
        default: 
            break;
    }
} 

async function viewEmployees() {
    const query = "SELECT * FROM employee";
    const data = await connection.query(query);
    console.table(data);
    init();
}
        
    

