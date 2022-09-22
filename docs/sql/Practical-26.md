---
sidebar_position: 26
---

#### 26. List all customers serviced by salesman with commission above 12%.

```sql
SELECT
    c1.cname,
    c1.rating,
    c2.cname,
    c2.rating
FROM
    customer c1,
    customer c2
WHERE
    c1.rating = c2.rating
    AND c1.cnum != c2.cnum
    AND c2.cnum != c1.cnum;
```

#### Output:

![d](outputs\26.jpg)
