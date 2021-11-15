Create Database employeetracker_db;
use employeetracker_db;
Create Table department(id int auto_increment primary key,
name VARCHAR(30) not null);
Create Table role(id INT auto_increment PRIMARY KEY, Title varchar(30), salary Decimal(10,2), department_id INT references department(id));
create Table employee(id INT auto_increment primary key, first_name varchar(30), Last_name varchar(30), role_id int references role(id), manager_id INT references employee(id) ON delete set null);