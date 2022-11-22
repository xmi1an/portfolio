---
sidebar_position: 47
---

#### 47. Delete the salesmen who produce the lowest order for each day.

```sql
DELETE FROM
    salesman
WHERE
    snum IN (
        SELECT
            snum
        FROM
            orders
        WHERE
            odate IN (
                SELECT
                    odate
                FROM
                    orders
                GROUP BY
                    odate
                HAVING
                    SUM(ammount) = (
                        SELECT
                            MIN(SUM(ammount))
                        FROM
                            orders
                        GROUP BY
                            odate
                    )
            )
    );
```
