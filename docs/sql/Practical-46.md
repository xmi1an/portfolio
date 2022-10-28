---
sidebar_position: 46
---

#### 46. Double the commission of all salesmen of London.

```sql
UPDATE
    salesman
SET
    commission = commission * 2
WHERE
    city = 'London';
```

#### Output:

![d](outputs\46.jpg)
