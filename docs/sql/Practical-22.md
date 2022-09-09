---
sidebar_position: 22
---

#### 22. Show the name of all customers with their salesman's name.

```sql
SELECT
    salesman.sname,
    customer.cname
FROM
    customer,
    salesman
WHERE
    customer.snum = salesman.snum;
```

#### Output:

![d](outputs\22.jpg)
