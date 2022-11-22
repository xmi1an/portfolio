---
sidebar_position: 0
---

#### Practicals

#### Create a Database with your name.

```sql
CREATE DATABASE YourNameDB;
```

#### Use the database

```sql
USE YourName;
```

#### create salesman table.

```sql
create table salesman (
    snum int(4) unique,
    sname varchar(15),
    city varchar(10),
    commission int(3)
);
```

#### Insert data into the salesman table.

```sql
INSERT INTO
    salesman (snum, sname, city, commission)
VALUES
    (1001, 'Piyush', 'London', 12);

INSERT INTO
    salesman (snum, sname, city, commission)
VALUES
    (1002, 'Niraj', 'Surat', 13);
```

#### Create customer table.

```sql
create table customer (
    cnum int(4) unique,
    cname varchar(15),
    city varchar(10),
    rating int(3),
    snum int(4) references salesman(snum)
);
```

#### Insert data into customer table.

```sql
INSERT INTO
    customer (cnum, cname, city, rating, snum)
VALUES
    (2001, 'Hardik', 'London', 100, 1001);
```

#### Create orders table.

```sql
create table orders (
    onum int(4) primary key,
    amount int(6),
    odate date,
    cnum int(4) references customer(cnum),
    snum int(4) references salesman(snum)
);
```

#### Insert data into orders table.

```sql
INSERT INTO
    orders (onum, ammount, odate, cnum, snum)
VALUES
    (3001, 18.69, '10/03/99', 2006, 1007);
```

#### Output:

![d](outputs\tables.jpg)

<hr />

![d](outputs\salesman.jpg)

<hr />

![d](outputs\customer.jpg)

<hr />

![d](outputs\orders.jpg)
