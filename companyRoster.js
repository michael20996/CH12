var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "Stockton209",
  database: "company_RosterDB"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "view",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View all Employees",
        "View all employees by department",
        "View all employees by manager",
        "Add employee",
        "Remove employee",
        "Update employee role",
        "Update employee manager"
      ]
    })
    .then(function(view) {
      switch (view.rawlist) {
      case "Find all employees":
        employeeSearch();
        break;

      case "Find all employees by department":
        departmentSearch();
        break;

      case "Add employee":
        addEmployee();
        break;

      case "Delete employee":
        deleteEmployee();
        break;

      case "Update employee role":
        updateEmployee();
        break;
    case "Update employee manager":
        updateManager();
        break;
      }
    });
}

function employeeSearch() {
  inquirer
    .prompt({
      name: "employee",
      type: "input",
      message: "What employee would you like to search for?"
    })
    .then(function(view) {
      var query = "SELECT id, department, manager FROM role WHERE ?";
      connection.query(query, { employee: view.employee }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log("id: " + res[i].id + " || department: " + res[i].department + " || manager: " + res[i].manager);
        }
        runSearch();
      });
    });
}