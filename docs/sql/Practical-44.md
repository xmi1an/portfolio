---
sidebar_position: 44
---

#### 44. Remove all orders from customer Chandu.

```sql
DELETE FROM
    orders
WHERE
    cnum = (
        SELECT
            cnum
        FROM
            customer
        WHERE
            cname = 'Chandu'
    );
```

#### Output:

![d](outputs\44.jpg)
