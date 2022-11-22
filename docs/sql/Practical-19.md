---
sidebar_position: 19
---

#### 19 Display the no.of order for each day in the following format. There are "X"(No. of Orders) Orders on "Y"(Date in dd - mon - yy).

```sql
SELECT
    onum as X,
    DATE_FORMAT(odate, ' %d - %m - %y') as Y
FROM
    orders;
```

#### Output:

![d](outputs\19.jpg)
