---
sidebar_position: 24
---

#### 24. List all customers serviced by salesman with commission above 12%.

```sql
SELECT
    onum,
    sname,
    cname
FROM
    orders
    INNER JOIN customer ON orders.cnum = customer.cnum
    INNER JOIN salesman ON orders.snum = salesman.snum
WHERE
    customer.city != salesman.city;
```

#### Output:

![d](outputs\24.jpg)
