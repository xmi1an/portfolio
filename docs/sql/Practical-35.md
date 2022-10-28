---
sidebar_position: 35
---

#### 35. Find all customers having rating greater than any customer in 'Rome'.

```sql
SELECT
    cname,
    cnum
FROM
    customer
WHERE
    rating > (
        SELECT
            MAX(rating)
        FROM
            customer
        WHERE
            city = 'Rome'
    );
```

#### Output:

![d](outputs\35.jpg)
