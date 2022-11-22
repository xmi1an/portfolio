---
sidebar_position: 51
---

#### 51. Create a view called Big orders which stores all orders larger than Rs.4000.

```sql
CREATE VIEW big_orders AS
SELECT
    *
FROM
    orders
WHERE
    ammount > 4000;
```

#### Output:

![d](outputs\51.jpg)
