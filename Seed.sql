USE company_RosterDB;

INSERT INTO department(name)
VALUES ("Sales"), 
       ("Management"), 
       ("Administrative"), 
       ("Accounting");

INSERT INTO `role`(title, salary, department_id)
VALUES("Salesman", 80000, 1),
      ("Assistant(to) the manager", 70000, 1)
      ("Owner", 1000000, 2),
      ("Manager", 90000, 2),
      ("Receptionist", 50000, 3),
      ("Accountant", 60000, 4)
      ("Head Accoutant", 70000, 4)



INSERT INTO employee(first_name, last_name, role_id, manager_id);
VALUES ("David", "Wallace", 2, 3), 
       ("Michael", "Scott", 2, 2 ), 
       ("Pamela", "Beesly", 3, null), 
       ("Jim", "Halpert", 1, null ), 
       ("Dwight", "Shrute", 1, null   ), 
       ("Andy", "Bernard", 1, null), 
       ("Stanley", "Hudson", 1 ,null),
       ("Oscar", "Martinez",4, null),
       ("Angela", "Martin", 4, 2),
       ("Kevin", "Malone", 4, null)

