---
sidebar_position: 23
---

#### 23. Write a C program to find factorial of accepted numbers.

```c
#include <stdio.h>
#include <conio.h>
void main()
{
    int n, i, fact = 1;
    clrscr();

    printf("Enter number : ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++)
    {
        fact = fact * i;
    }

    printf("Factorial of %d is %d ", n, fact);
}
```

<!--
### Output

![d](outputs\23.jpg)
 -->
