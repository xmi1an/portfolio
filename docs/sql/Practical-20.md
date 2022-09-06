---
sidebar_position: 20
---

#### 20. Assume each salesperson has a 12 % commission.Write a query on the order table that will Produce the Order number, salesman no and amount of commission for that order.

```sql
SELECT
    onum,
    snum,
    ammount * 0.12
FROM
    orders;
```

#### Output:

![d](outputs\20.jpg)
