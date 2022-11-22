---
sidebar_position: 18
---

#### 18. Find out the customer in alphabetical orders whose name begins with 'G'.

```sql
SELECT
    cname
FROM
    customer
WHERE
    cname LIKE 'G%'
ORDER BY
    cname;
```

#### Output:

![d](outputs\18.jpg)
