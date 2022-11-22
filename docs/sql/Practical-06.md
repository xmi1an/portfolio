---
sidebar_position: 6
---

#### 6. List out names and cities of all salesmen in London with commission above 10%.

```sql
SELECT
    sname,
    city
FROM
    salesman
WHERE
    city = 'London'
    AND commission > 10;
```

#### Output:

![d](outputs\6.jpg)
