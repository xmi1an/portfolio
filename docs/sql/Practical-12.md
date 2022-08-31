---
sidebar_position: 12
---

#### 12.List all orders with zero or NULL amount.

```sql
SELECT
    *
FROM
    orders
WHERE
    ammount = 0
    OR ammount IS NULL;
```

#### Output:

![d](outputs\12.jpg)
