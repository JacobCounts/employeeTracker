const inquirer = require("inquirer");
const mysql = require("mysql");
const connection = require("./connection");

// Start the application
init();


// Asks user questions and options to choose from 
async function init() {
  const { action } = await inquirer.prompt({
    type: "list",
    message: "Please choose how you would like to proceed",
    name: "action",
    choices: [
      "View All Employees",
      "View All Departments",
      "View All Positions",
      "Add Employee",
      "Remove Employee",
      "Add Department",
      "Remove Department",
      "Exit",
    ],
  });

  switch (action) {
    case "View All Employees":
      viewEmployees();
      break;
    case "View All Departments":
      viewAllDept();
      break;
    case "View All Positions":
      viewAllPositions();
      break;
    case "Add Employee":
      addEmp();
      break;
    case "Remove Employee":
      removeEmp();
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
// shows all employees in table form
async function viewEmployees() {
  const query = "SELECT * FROM employee";
  const data = await connection.query(query);
  console.table(data);
  init();
}
// shows all departments in table form
async function viewAllDept() {
  const query = "SELECT * FROM department";
  const data = await connection.query(query);
  console.table(data);
  init();
}
// shows all positions in table form 
async function viewAllPositions() {
  const query = "SELECT * FROM position";
  const data = await connection.query(query);
  console.table(data);
  init();
}
// allows user to add employee 
function addEmp() {
  inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message: "Enter Employees First Name: ",
      },
      {
        name: "lastName",
        type: "input",
        message: "Enter Employees Last Name: ",
      },
      {
        name: "empPosition",
        type: "list",
        message: "What is the employees position?",
        choices: [
          "Manager",
          "Salesman",
          "Human Resources",
          "Receptionist",
          "Accountant",
        ],
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
          position_id: 0,
          manager_id: 0,
        },
        function (err, res) {
          if (err) throw err;
          console.table(answer);
        }
      );
      init();
    });
}
// allows user to add department 
function addDepartment() {
  inquirer
    .prompt([
      {
        name: "newDepartment",
        type: "input",
        message: "Which department would you like to add?",
      },
    ])
    .then(function (answer) {
      connection.query("INSERT INTO department SET ?", {
        name: answer.newDepartment,
      });
      let query = "SELECT * FROM department";
      let data = connection.query("SELECT * FROM department");
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.log("Your department has been added");
        console.table(data, res);
      });
      init();
    });
}
// allows user to remove emoloyee 
function removeEmp() {
  inquirer.prompt ([
    {
      name: "fireEmp",
      type: "input",
      message: "Which employee would you like to remove?",
    },
  ])
  .then(function (answer) {
    connection.query("DELETE FROM employee WHERE ?", {
    first_name: answer.fireEmp
    });
    let query = "SELECT * FROM employee";
    let data = connection.query("SELECT * FROM employee");
    connection.query(query, function (err, res) {
      if (err) throw err;
      console.log("Employee has been removed");
      console.table(data, res);
    });
    viewEmployees();
    init();
  })
}
// allows user to remove department 
function removeDepartment() {
  inquirer.prompt ([
    {
      name: "removeDept",
      type: "input",
      message: "Which department would you like to remove?",
    },
  ])
  .then(function (answer) {
    connection.query("DELETE FROM department WHERE ?", {
    first_name: answer.fireEmp
    });
    let query = "SELECT * FROM department";
    let data = connection.query("SELECT * FROM department");
    connection.query(query, function (err, res) {
      if (err) throw err;
      console.log("Department has been removed");
      console.table(data, res);
    });
    viewAllDept();
    init();
  })
}
