---
sidebar_position: 17
---

#### 17. Find out each customer's smallest orders.

```sql
SELECT
    cnum,
    MIN(ammount)
FROM
    orders
GROUP BY
    cnum;
```

#### Output:

![d](outputs\17.jpg)
