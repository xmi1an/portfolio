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

    printf("\nEnter n1 : ");
    scanf("%d", &n1);

    printf("\nEnter n2 : ");
    scanf("%d", &n2);

    t = n1;
    n1 = n2;
    n2 = t;

    printf("\nNew n1 : %d \n", n1);
    printf("New n2 : %d \n", n2);
}
```

### Output

![d](outputs\Practical-08.c.jpg)
