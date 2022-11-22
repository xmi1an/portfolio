---
sidebar_position: 48
---

#### 48. Delete all customers with no current orders.

```sql
DELETE FROM
    customer
WHERE
    cnum NOT IN (
        SELECT
            cnum
        FROM
            orders
    );
```

#### Output:

![d](outputs\48.jpg)
