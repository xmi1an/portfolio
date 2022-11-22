---
sidebar_position: 28
---

#### 28. List all salesmen who are living in the same city without duplicate rows.

```sql
SELECT
    s1.sname,
    s1.city,
    s2.sname,
    s2.city
FROM
    salesman s1,
    salesman s2
WHERE
    s1.city = s2.city
    AND s1.snum != s2.snum;
```

#### Output:

![d](outputs\28.jpg)
