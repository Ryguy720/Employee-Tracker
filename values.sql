use employeetracker_db;
insert into department(name)values("HR"),("Accounting"),("Legal");
insert into role(title,salary,department_id)values("Manager",100,1),("Manager",100,2),("Manager",100,3),("Payroll Specialist",100,1),("Accountant",100,2),("Paralegal",100,3);
insert into employee(first_name,last_name,role_id,manager_id)values("Ryan","McCulloch",1,null),("Joe","Smith",2,null),("Ricky","Bobby",3,null),("Robert","Bob",4,1),("Lisa","Cat",5,2),("Ronald","Mc",6,3);
