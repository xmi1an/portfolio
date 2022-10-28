---
sidebar_position: 37
---

#### 37. Select all customers whose rating doesn't match with any rating customer of 'Surat'.

```sql
SELECT
    cname,
    cnum
FROM
    customer
WHERE
    rating NOT IN (
        SELECT
            rating
        FROM
            customer
        WHERE
            city = 'Surat'
    );
```

#### Output:

![d](outputs\37.jpg)
