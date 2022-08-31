---
sidebar_position: 10
---

#### 10. List all customers whose names begin with a letter 'C'.

```sql
SELECT
    *
FROM
    customer
WHERE
    cname LIKE 'C%';
```

#### Output:

![d](outputs\10.jpg)
