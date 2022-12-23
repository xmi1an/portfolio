---
sidebar_position: 18
---

#### 18. Write a C program to find the sum of digit of accepted number.

```c
#include <stdio.h>
#include <conio.h>

void main()
{
    int num;
    int sum = 0;
    int temp = num;
    int digit;
    printf("Enter Number : ");
    scanf("%d", &num);

    while (num > 0)
    {
        digit = num % 10;
        sum = sum + digit;
        num = num / 10;
    }

    printf("Sum of digits %d is %d ", temp, sum);
}
```

<!--
### Output

![d](outputs\18.jpg)
 -->
