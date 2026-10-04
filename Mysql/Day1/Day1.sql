use dummy;
create table employee(
empId int primary key auto_increment,
empName varchar(20),
empAge int,
empDept varchar(20),
empSalary int,
createdby varchar(20) default 'admin',
createdat date,
updateby varchar(20) default 'admin',
updatedat date
 );
 
 
 insert into employee (empName,empAge,empDept,empSalary,createdat,updatedat) value ("sandy",20,"fs",80000,curdate(),curdate());