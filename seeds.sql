USE employee_db;

--department seeds--

INSERT INTO department (name)
VALUES ("Accounting");

INSERT INTO department (name)
VALUES ("Human Resources");

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Front office");

INSERT INTO department (name)
VALUES ("Manager");

SELECT * FROM department
--position seeds--

INSERT INTO position (title, department_id)
VALUES ("Accountant", 1);

INSERT INTO position (title, department_id)
VALUES ("Human Resources", 2);

INSERT INTO position (title, department_id)
VALUES ("Salesman", 3);

INSERT INTO position (title, department_id)
VALUES ("Receptionist", 4);

INSERT INTO position (title, department_id)
VALUES ("Manager", 5);

SELECT * FROM position

--employee seeds-

INSERT INTO employee (first_name, last_name, position_id)
VALUES ("Pam", "Beesly", 4)

INSERT INTO employee (first_name, last_name, position_id)
VALUES ("Dwight", "Schrute", 3)

INSERT INTO employee (first_name, last_name, position_id)
VALUES ("Jim", "Halpert", 3)

INSERT INTO employee (first_name, last_name, position_id)
VALUES ("Michael", "Scott", 5)

INSERT INTO employee (first_name, last_name, position_id)
VALUES ("Creed", "Bratton", 3)

INSERT INTO employee (first_name, last_name, position_id)
VALUES ("Andy", "Bernard", 3)

INSERT INTO employee (first_name, last_name, position_id)
VALUES ("Kevin", "Malone", 1)

INSERT INTO employee (first_name, last_name, position_id)
VALUES ("Toby", "Flenderson", 2)

INSERT INTO employee (first_name, last_name, position_id)
VALUES ("Oscar", "Martinez", 1)

INSERT INTO employee (first_name, last_name, position_id)
VALUES ("Phyllis", "Vance", 3)

SELECT * FROM employee
