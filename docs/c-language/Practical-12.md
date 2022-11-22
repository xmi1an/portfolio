---
sidebar_position: 12
---

#### 12. Write a C program to find out the largest value from given three numbers using conditional Operator.

```c
#include <stdio.h>
#include <conio.h>

void main()
{
    int n1, n2, n3;
    clrscr();

    printf("Enter n1 : ");
    scanf("%d", &n1);

    printf("Enter n2 : ");
    scanf("%d", &n2);

    printf("Enter n3 : ");
    scanf("%d", &n3);

    if (n1 > n2 && n1 > n3)
    {
        printf("n1 is largest");
    }
    else if (n2 > n1 && n2 > n3)
    {
        printf("n2 is largest");
    }
    else
    {
        printf("n3 is largest");
    }
getch();
}
```

<!--
### Output

![d](outputs\Practical-10.c.jpg) -->
