---
sidebar_position: 45
---

#### 45. Increase the rating of all customers in Rome by 100.

```sql
UPDATE
    customer
SET
    rating = rating + 100
WHERE
    city = 'Rome';
```

#### Output:

![d](outputs\45.jpg)
