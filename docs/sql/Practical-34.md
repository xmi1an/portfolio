---
sidebar_position: 34
---

#### 34. Using correlated sub query find the name and number of all customer with rating equal to Maximum for their city.

```sql
SELECT
    cname,
    cnum
FROM
    customer
WHERE
    rating = (
        SELECT
            MAX(rating)
        FROM
            customer
        WHERE
            city = customer.city
    );
```

#### Output:

![d](outputs\34.jpg)
