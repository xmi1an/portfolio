---
sidebar_position: 11
---

#### 11. List all customers whose names begins with letter 'A' to 'G'.

```sql
select
    *
from
    customer
where
    cname between ('a%')
    and ('h%');

```

#### Output:

![d](outputs\11.jpg)
