-- create database goverment_office;
-- use goverment_office;
 
 create table  staffs(
 staffId int primary key auto_increment,
 staffName varchar(20),
 staffAge int,
 staffSalary int,
 createdby varchar(20) default 'admin',
 createdat date,
 updatedby varchar(20) default 'admin',
 updatedat date,
 );