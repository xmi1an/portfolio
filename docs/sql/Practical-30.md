---
sidebar_position: 30
---

#### 30. Extract all orders of Miti.

```sql
select
    *
from
    orders
where
    snum = (
        select
            snum
        from
            salesman
        where
            sname = 'Miti'
    );
```

#### Output:

![d](outputs\30.jpg)
