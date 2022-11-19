---
sidebar_position: 32
---

#### 32. List all orders that are greater than the average of April 10, 1999.

```sql
    select
    *
from
    orders
where
    ammount > (
        select
            avg(ammount)
        from
            orders
        where
            odate = '10-apr-99'
        group by
            odate
    );
```

#### Output:

<!-- ![d](outputs\32.jpg) -->
