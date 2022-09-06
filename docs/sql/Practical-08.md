---
sidebar_position: 8
---

#### 8. List all orders for more than Rs.1000 except the orders of snum, 1006 of 10/03/99.

```sql
SELECT
    *
FROM
    orders
WHERE
    ammount > 1000
    AND NOT (
        odate = '10/03/99'
        AND snum = 1006
    );
```

#### Output:

![d](outputs\8.jpg)
