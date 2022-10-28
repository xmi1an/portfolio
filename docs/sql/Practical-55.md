---
sidebar_position: 55
---

#### 55. Create a view Show name that shows for each order the order no, amount, salesman name And the customer name.

```sql
CREATE VIEW order_details AS
SELECT
    o.onum,
    o.ammount,
    s.sname,
    c.cname
FROM
    orders o,
    salesman s,
    customer c
WHERE
    o.snum = s.snum
    AND o.cnum = c.cnum;
```

#### Output:

![d](outputs\55.jpg)
