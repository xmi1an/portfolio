---
sidebar_position: 33
---

#### 33. Count the no.of customers with the rating above than the average rating of 'Surat'.

```sql
SELECT
    COUNT(cnum)
FROM
    customer
WHERE
    rating > (
        SELECT
            AVG(rating)
        FROM
            customer
        WHERE
            city = 'Surat'
    );
```

#### Output:

![d](outputs\33.jpg)
