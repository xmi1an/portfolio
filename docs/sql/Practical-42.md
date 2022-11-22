---
sidebar_position: 42
---

#### 42. Insert all the rows of salesmen table with city London in the London staff table.

```sql
INSERT INTO
    londonstaff
SELECT
    *
FROM
    salesman
WHERE
    city = 'London';
```

#### Output:

![d](outputs\42.jpg)
