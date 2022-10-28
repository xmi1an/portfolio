---
sidebar_position: 54
---

#### 54. Create a view that shows the average and total orders for each salesmen after his name And number.

```sql
CREATE VIEW salesman_orders AS
SELECT
    snum,
    AVG(ammount) as avg_order,
    SUM(ammount) as total_order
FROM
    orders
GROUP BY
    snum;
```

#### Output:

![d](outputs\54.jpg)
