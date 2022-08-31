---
sidebar_position: 15
---

#### 15. Count the no. of salesmen currently having orders.

```sql
SELECT
    COUNT(snum),
    snum
FROM
    orders
GROUP by
    snum;
```

#### Output:

![d](outputs\15.jpg)
