# SQL与关系数据库基本操作

## 第一节 SQL概述

SQL是一种数据库查询和程序设计语言，主要用于存取数据以及查询、更新和管理关系数据库系统。

SQL的功能主要是查询，除此之外还包括数据定义、数据操纵和数据控制等与数据库有关的一系列功能。

SQL具有以下特点：
(1) SQL不是某个特定数据库供应商专有的语言
(2) SQL简单易学
(3) SQL是一种强有力的语言，灵活使用其语言元素，可以进行非常复杂和高级的数据库操作。
(4)SQL语句不区分大小写。

数据定义语言的主要功能是对数据库及数据库中的各种现象进行创建、删除、修改等操作。

数据定义语言包括的主要SQL语句有：
(1) CREATE语句。 其主要功能是创建数据库或数据库对象。
(2) ALTER语句。 其主要功能是对数据库或数据库对象进行修改。
(3) DROP语句。 其主要功能是删除数据库或数据库对象。

数据操纵语言包括的主要SQL语句有：
(1) SELECT语句。 其主要功能是从表或视图中检索数据。
(2) INSERT语句。 其主要功能是将数据插入到表或视图中。
(3) UPDATE语句。 其主要功能是修改表或视图中的数据。
(4) DELETE语句。 其主要功能是从表或视图中删除数据。

## 第二节 SQL预备知识

MySQL是一个关系数据库管理系统 RDBMS

MySQL具有客户/服务器体系结构，最初由瑞典MySQL AB公司开发

MySQL的特点有：
(1) 体积小。
(2) 速度快。
(3) 开放源代码。
(4) 遵循GPL（GNU通用公共许可证）

常量是指在程序运行过程中值不变的量。

常量可分为以下几类：
(1) 字符串常量
(2) 数值常量
(3) 十六进制常量
(4) 时间日期常量
(5) 位字段值
(6) 布尔值
(7) NULL值

表达式是常量、变量、列名、复杂计算、运算符和函数的组合。

MySQL提供了很多内置函数，主要类型有：
(1) 数学函数
(2) 聚合函数
(3) 字符串函数
(4) 日期和时间函数
(5) 加密函数
(6) 控制流程函数
(7) 格式化函数
(8) 类型转换函数
(9) 系统信息函数

目前，使用MySQL数据库管理系统构建各种信息管理系统或互联网网站的应用环境，主要有两种构架方式：
(1) LAMP
(2) WAMP

## 第三节 数据定义

在MySQL中，可以使用CREATE DATABASE 或 CREATE SCHEMA 语句创建数据库。

CREATE DATABASE 或 CREATE SCHEMA 语句的语法格式是：
CREATE { BATABASE | SCHEMA } [IF NOT EXISTS] db_name [DEFAULT] CHARACTER SET [=] charset_name | [DEFAULT] COLLATE [=] collation_name

在MYSQL中，ALTER DATABASE 或者 ALTER SCHEMA 语句通常用来修改已经被创建的数据库的相关参数。

ALTER DATABASE 或 ALTER SCHEMA 语句的语法简略为：

ALTER {DATABASE | SCHEMA } [db_name]
alter_specification……

在MySQL中，可以使用CREATE TABLE语句创建表。
CREATE TABLE 语句的基本语法格式是：
CREATE [TEMPORARY] TABLE tbl_name
(
    字段名1 数据类型 [列级完整性约束条件][默认值]
    [，字段名2数据类型[列级完整性约束条件][默认值]]
    [,……]
    [，表级完整性约束条件]
)[ENGINE=引擎类型]

索引是指DBMS根据表中的一列或若干列按照一定顺序建立的列值与记录行之间的对应关系表。

根据具体用途，索引在逻辑上通常分为三类：
(1) 普通索引（INDEX）
(2) 唯一性索引（UNIQUE）
(3) 主键（PRIMARY KEY）

在MySQL数据库中，创建索引的方式有：
(1) 使用 CREATE INDEX 语句创建索引
(2) 使用 CREATE TABLE 语句创建索引
(3) 使用 ALTER TABLE 语句创建索引

CREATE INDEX 语句是专门用于创建索引的SQL语句，可以使用它在一个已有的表上创建索引，但该语句不能创建主键。

CREATE INDEX 语句的常用语法格式是：
CREATE [UNIQUE] INDEX index_name
ON tbl_name (index_col_name，……)
使用 CREATE TABLE语句创建索引的具体使用方式是在该语句语法中的表创建定义(create definition) 部分添加以下语法成分中的某一项或几项：

(1) 语法项 [CONSTRAINT[symbol]] PRIMARY KEY (index_col_name,……) ，用于表示在创建新表的同时创建该表的主键。

(2) 语法项[INDEX|KEY][index_name](index_col_name,……)，用于表示在创建新表的同时创建该表的索引。

(3) 语法项[CONSTRAINT[symbol] UNIQUE[INDEX｜KEY][index_name](index_col_name,……),用于表示在创建新表的同时创建该表的唯一性索引。

(4)语法项[CONSTRAINT[symbol]] POREIGN KEY [index_name](index_col_name,……),用于表示在创建新表的同时创建该表的外键。



使用 ALTER TABLE 语句常见索引的具体使用方法是在该语句语法中添加一下语法成分中的某一项或几项:
(1) 语法项 ADD {INDEX｜KEY} [index_name](index_col_name,……) ,用于表示在修改表的同时为该表添加索引。

(2) 语法项ADD [CONSTRAINT[symbol]] PRIMARY KEY (index_col_name,……) ， 用于表示在修改表的同时为该表添加主键。

(3) 语法项 ADD [CONSTRAINT[symbol]] UNIQUE [INDEX | KEY] [index_name](index_col_name,……)，用于表示在修改表的同时为该表添加唯一性索引。

(4) 语法项 ADD [CONSTRAINT[symbol]] FOREIGN KEY [index_name](index_col_name,……)，用于表示在修改表的同时为该表添加外键。


## 第四节 数据更新
在MySQL中，可以使用UPDATE语句来修改更新一个表中的数据，实现对表中行的列数据进行修改。

UPDATE语句的语法格式是：
UPDATE tbl_name
SET col_name1 = {expr1 |DEFAULT}[,col_name2={exper2 | DEFAULT}]……
[WHERE where_condition]
[ORDER BY ……]
[LIMIT row_count]

在MySQL中，使用INSERT……VALUES语句插入单行或多行元组数据的语法格式是：
INSERT [INTO] tbl_name [(col_name,……)]
{VALUES | VALUE}({expr|DEFAULT},……,(……),……)

在MySQL中，可以使用INSERT……SET 语句直接给表中的某（些）列指定对应的列值，即要插入数据的列名在SET字句中指定，这种方式会更加灵活，其语法格式是
INSERT [INTO] tbl_name
SET col_name = {expe | DEFAULT},……

## 第五节 数据查询
SELECT 语句的功能是从数据库中快捷方便地检索、统计或输出数据。
在MySQL中，SELECT语句的常用语法格式是：
SELECT
[ALL | DISTINCT | DISTINCTROW]
select_expr[,select_expr ……]
FROM table_references
[WHERE where_condition]
[GROUP BY {col_name | expr | position}
[ASC | DESC],…… [WITH ROLLUP]]
[HAVING where_condition]
[ORDER BY {col_name | expr | position}]
[ASC | DESC],……]
[LIMIT {[offset,]row_count|row_count OFFSET offset}]

在此语法结构中，各个字句的功能是：
(1) SELECT 子句用于指定输出的字段。
(2) FROM 子句用于指定数据的来源。
(3) WHERE 子句用于指定数据的选择条件。
(4) GROUP BY 子句用于对检索的记录进行分组。
(5) HAVING 子句用于指定组的选择条件。
(6) ORDER BY 子句用于对查询的结构进行排序。

聚合函数通常是数据库系统中一类系统内置函数，常用语对一组值进行计算，然后再返回单个值。

MySQL中常用的聚合函数有：
(1) COUNT 求组中项数
(2) MAX 求最大值
(3) MIN 最小值
(4) SUM 返回表达式中所有值的和
(5) AVG 求组中值的平均值
(6) STD 或 STDDEV 返回给定表达式中所有值的标准值 
(7) VARIANCE 返回给定表达式中所有值的方差
(8) GROUP_CONCAT 返回由属于一组的列值连接组合而成的结果
(9) 逻辑或
(10) 逻辑与
(11) BIT_XOR 逻辑异或

在SELECT语句中，为了实现对每个组的聚集计算，允许使用GROUP BY子句，将结果集中的数据行根据选择列的值进行逻辑分组。
GROUP BY子句的使用语法格式是：
GROUP BY {col_name | expr | position }[ASC|DESC],…… [WITH ROLLUP]

## 第六节 视图

视图是从一个或多个表或者其他视图中通过查询语句导出的表，它也包含一系列带有名称的数据列和若干条数据行，并有自己的视图名。

视图与基本表的区别:
(1) 视图不是数据库中真实的表，而是一张虚拟表，其结构和数据是建立在对数据库中真实表的查询基础上的。

(2) 视图的内容是由存储在水库中进行查询操作的SQL语句来定义的，它的列数据与行数据均来自于定义视图的查询所饮用的真实表，并且这些数据是在引用视图时动态生成的。

(3) 视图不是以数据集的形式存储在数据库中，它所对应的数据实际上是存储在视图所引用的真实表（基本表）中。

(4) 视图是用来查看存储在别处的数据的一种虚拟表，而其自身并不存储数据。

使用视图的优点有：
(1) 剧中分散数据
(2) 简化查询语句
(3) 重用SQL语句
(4) 保护数据安全
(5) 共享所需数据
(6) 更改数据格式

在MySQL中，可以使用 CREATE VIEW 语句来创建视图 
CREATE VIEW 语句常用的语法格式是:
CREATE VIEW view_name [(column_list)]
AS select_statement
[WITH [CASCADED | LOCAL] CHECK OPTION]

对于可更新的视图，需要该视图中的行和基本表中的行之间具有 一对一 的关系。

视图用于查询索引，主要体现在以下应用中：
(1) 利用视图简化复杂的表链接。
(2) 使用视图重新格式化检索出的数据。
(3) 使用视图过滤不想要的数据。