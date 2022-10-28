---
sidebar_position: 52
---

#### 52. Create a view that shows all the customers who have the highest ratings.

```sql
CREATE VIEW highest_rating AS
SELECT
    *
FROM
    customer
WHERE
    rating = (
        SELECT
            MAX(rating)
        FROM
            customer
    );
```

#### Output:

![d](outputs\52.jpg)
