use employeetracker_db;
insert into department(name)values("HR"),("Accounting"),("Legal");
insert into role(title,salary,department_id)values("Manager",60000,1),("Receptionist",50000,2),("Lawyer",90000,3),("Payroll Specialist",60000,2),("Accountant",100000,2),("Paralegal",65000,3);
insert into employee(first_name,last_name,role_title,manager_id)values("Ryan","McCulloch","Manager",null),("Joe","Smith","Accountant",null),("Ricky","Bobby","Paralegal",null),("Robert","Bob","Payroll Specialist",null),("Lisa","Cat","Receptionist",null),("Ronald","Mc","Accountant",null);
