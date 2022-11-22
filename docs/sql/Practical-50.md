---
sidebar_position: 50
---

#### 50. Give the commands to create our sample tables (salesmen, customer, orders) with all the Necessary constraints like PRIMARY KEY, NOT NULL UNIQUE, FOREING KEY.

```sql
CREATE TABLE salesman (
    snum int,
    sname varchar(20),
    city varchar(20),
    commission int,
    PRIMARY KEY (snum)
);
```
