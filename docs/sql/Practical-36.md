---
sidebar_position: 36
---

#### 36. Find all the customers who have greater rating than every customer in 'Rome'.

```sql
SELECT
    cname,
    cnum
FROM
    customer
WHERE
    rating > (
        SELECT
            MIN(rating)
        FROM
            customer
        WHERE
            city = 'Rome'
    );
```

#### Output:

![d](outputs\36.jpg)
