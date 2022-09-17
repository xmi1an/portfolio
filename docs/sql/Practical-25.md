---
sidebar_position: 25
---

#### 25. List all customers serviced by salesman with commission above 12%.

```sql
SELECT
    cname,
    sname,
    commission
FROM
    customer
    INNER JOIN salesman ON customer.snum = salesman.snum
WHERE
    commission > 12;
```

#### Output:

![d](outputs\25.jpg)
