-- use dummy;
-- drop table employee;
-- CREATE TABLE employees (
--     id INT PRIMARY KEY,
--     name VARCHAR(50),
--     department VARCHAR(50),
--     salary DECIMAL(10,2),
--     city VARCHAR(50),
--     age INT
-- );

-- INSERT INTO employees
-- (id, name, department, salary, city, age)
-- VALUES
-- (1, 'Arun', 'IT', 45000, 'Chennai', 24),
-- (2, 'Bala', 'HR', 35000, 'Madurai', 26),
-- (3, 'Kumar', 'IT', 55000, 'Chennai', 28),
-- (4, 'Priya', 'Finance', 40000, 'Coimbatore', 25),
-- (5, 'Divya', 'HR', 38000, 'Chennai', 27),
-- (6, 'Vijay', 'IT', 60000, 'Salem', 30),
-- (7, 'Kaviya', 'Finance', 42000, 'Madurai', 26),
-- (8, 'Surya', 'IT', 50000, 'Chennai', 29);
-- select * from employees;
-- select name,salary,city from employees;
select * from employees where city= "chennai";
select * from employees where salary > 45000 or city = "chennai";
select * from employees where salary > 45000 and city = "chennai";
select * from employees where age < 28;
select * from employees where  salary between 30000 and 40000;
select * from employees where  salary between 30000 and 40000 and city = "chennai";
select * from employees where city like  'ch_nnai';