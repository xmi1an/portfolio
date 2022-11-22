---
sidebar_position: 38
---

#### 38. Create a union of two queries that shows the names, cities and ratings of all customers.Those with rating of >= 200 should display 'HIGH RATING' and those with < 200 should Display 'LOW RATING'

```sql
SELECT
    cname,
    city,
    rating,
    'HIGH RATING' as rating_type
FROM
    customer
WHERE
    rating >= 200
UNION
SELECT
    cname,
    city,
    rating,
    'LOW RATING' as rating_type
FROM
    customer
WHERE
    rating < 200;
```

#### Output:

![d](outputs\38.jpg)
