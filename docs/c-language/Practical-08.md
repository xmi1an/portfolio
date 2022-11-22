---
sidebar_position: 8
---

#### 8. Write a C program to interchange two numbers.

```c
#include <stdio.h>
#include <conio.h>
void main()
{
    int n1, n2, t;

    clrscr();

    printf("Enter n1 : ");
    scanf("%d", &n1);

    printf("\n Enter n2 : ");
    scanf("%d", &n2);

    t = n1;
    n1 = n2;
    n2 = t;

    printf("\n New n1 : %d \n", n1);
    printf("\n New n2 : %d \n", n2);
}
```

### Output

![d](outputs\Practical-08.c.jpg)
