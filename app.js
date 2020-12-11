const inquirer = require("inquirer");
const mysql = require("mysql");
const connection = require("./connection");

// Start the application
init();

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

async function viewEmployees() {
  const query = "SELECT * FROM employee";
  const data = await connection.query(query);
  console.table(data);
  init();
}

async function viewAllDept() {
  const query = "SELECT * FROM department";
  const data = await connection.query(query);
  console.table(data);
  init();
}

async function viewAllPositions() {
  const query = "SELECT * FROM position";
  const data = await connection.query(query);
  console.table(data);
  init();
}

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


