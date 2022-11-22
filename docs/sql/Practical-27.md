---
sidebar_position: 27
---

#### 27. List all customers located in cities where salesman Niraj has customers.

```sql
select
    c.cname,
    c.city
from
    customer c
where
    c.snum = (
        select
            snum
        from
            salesman
        where
            sname like 'Niraj'
    );
```

#### Output:

![d](outputs\27.jpg)
