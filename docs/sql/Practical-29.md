---
sidebar_position: 29
---

#### 29. Produce the name and city of all the customers with the same rating as Hardik'.

```sql
SELECT
    cname,
    city
FROM
    customer
WHERE
    rating = (
        SELECT
            rating
        FROM
            customer
        WHERE
            cname = 'Hardik'
    );
```

#### Output:

![d](outputs\29.jpg)
