---
sidebar_position: 16
---

#### 16. Find the largest orders taken by each salesman on each date.

```sql
select
    snum,
    odate,
    max(ammount)
from
    orders
group by
    snum;
```

#### Output:

![d](outputs\16.jpg)
