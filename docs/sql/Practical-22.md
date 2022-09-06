---
sidebar_position: 22
---

#### 22. Show the name of all customers with their salesman's name.

```sql
SELECT
    cname,
    sname
FROM
    customer
    INNER JOIN salesman ON customer.snum = salesman.snum;
```

#### Output:

![d](outputs\22.jpg)
