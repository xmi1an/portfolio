---
sidebar_position: 7
---

#### 7. List all customers excluding those with rating <= 100 or they are located in Rome.

```sql
SELECT
    *
FROM
    customer
WHERE
    NOT (
        rating <= 100
        OR city = 'Rome'
    );
```

#### Output:

![d](outputs\7.jpg)
