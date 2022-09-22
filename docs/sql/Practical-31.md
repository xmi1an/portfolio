---
sidebar_position: 31
---

#### 31. Find all orders of the salesman who services 'Hardik'.

```sql
SELECT
    *
FROM
    orders
WHERE
    snum = (
        SELECT
            snum
        FROM
            customer
        WHERE
            cname = 'Hardik'
    );
```

#### Output:

![d](outputs\31.jpg)
