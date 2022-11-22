---
sidebar_position: 23
---

#### 23. List all orders with the names of their customer and salesman.

```sql
SELECT
    onum,
    sname,
    cname
FROM
    orders
    INNER JOIN customer ON orders.cnum = customer.cnum
    INNER JOIN salesman ON orders.snum = salesman.snum;
```

#### Output:

![d](outputs\23.jpg)
