---
sidebar_position: 9
---

#### 9. List all orders taken on 10th March, April and June 1999.

```sql
SELECT
    *
FROM
    orders
WHERE
    odate IN (
        '10/03/1999',
        '10/04/1999',
        '10/06/1999'
    );
```
