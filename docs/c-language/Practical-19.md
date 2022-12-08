---
sidebar_position: 19
---

#### 19. Write a C program to find the sum of first 100 odd numbers And even numbers.

```c
#include <stdio.h>

void main()
{
    int i, even = 0, odd = 0;
    clrscr();
    for (i = 1; i <= 100; i++)
    {
        if (i % 2 == 0)
        {
            even = even + i;
        }
        else
        {
            odd = odd + i;
        }
    }

    printf("Sum of first 100 Even numbers is %d \n", even);
    printf("Sum of first 100 Odd numbers is %d", odd);
getch();
}
```

<!--
### Output

![d](outputs\19.jpg)
 -->
