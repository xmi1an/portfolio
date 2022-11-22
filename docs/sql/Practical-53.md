---
sidebar_position: 53
---

#### 53. Create a view that shows all the number of salesman in each city.

```sql
CREATE VIEW salesman_city AS
SELECT
    city,
    COUNT(snum) as no_of_salesman
FROM
    salesman
GROUP BY
    city;
```

#### Output:

![d](outputs\53.jpg)
