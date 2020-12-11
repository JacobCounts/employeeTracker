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

INSERT INTO employee (id, first_name, last_name, position_id)
VALUES (1, "Pam", "Beesly", 4);

INSERT INTO employee (id, first_name, last_name, position_id)
VALUES (2,"Dwight", "Schrute", 3);

INSERT INTO employee (id, first_name, last_name, position_id)
VALUES (3, "Jim", "Halpert", 3);

INSERT INTO employee (id, first_name, last_name, position_id)
VALUES (4, "Michael", "Scott", 5);

INSERT INTO employee (id, first_name, last_name, position_id)
VALUES (5, "Creed", "Bratton", 3);

INSERT INTO employee (id, first_name, last_name, position_id)
VALUES (6, "Andy", "Bernard", 3);

INSERT INTO employee (id, first_name, last_name, position_id)
VALUES (7, "Kevin", "Malone", 1);

INSERT INTO employee (id, first_name, last_name, position_id)
VALUES (8, "Toby", "Flenderson", 2);

INSERT INTO employee (id, first_name, last_name, position_id)
VALUES (9, "Oscar", "Martinez", 1);

INSERT INTO employee (id, first_name, last_name, position_id)
VALUES (10, "Phyllis", "Vance", 3);

SELECT * FROM employee
