---
sidebar_position: 13
---

#### 13. Find out the largest order of salesman 1002 and 1007.

```sql
SELECT
    *
FROM
    orders
WHERE
    snum = 1002
    OR snum = 1007
order BY
    ammount DESC
LIMIT
    1;
```

#### Output:

![d](outputs\13.jpg)
