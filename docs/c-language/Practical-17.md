---
sidebar_position: 17
---

#### 17. Write a C program to find out the max. and min. number from given 10 numbers.

```c
#include <stdio.h>
#include <conio.h>
void main()
{
    int n, i, max, min;
    clrscr();
    for (i = 1; i <= 10; i++)
    {
        printf("Enter number : ");
        scanf("%d", &n);

        if (i == 1)
        {
            max = n;
            min = n;
        }
        else
        {
            if (max < n)
            {
                max = n;
            }
            if (min > n)
            {
                min = n;
            }
        }
    }

    printf("Max : %d\n", max);
    printf("Min : %d\n", min);
}

```
