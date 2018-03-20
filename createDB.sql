create database nodejs;
use nodejs;

create table block(
	id int(11),
    title varchar(200),
    message text
    );
    
    insert into block values(1,'tan','message from mysql 1');
    
    insert into block values(2,'Bingo','message from mysql 2');
    
    insert into block values(3,'Lulliya','message from mysql 3');
    
    
select * from block;
