---
sidebar_position: 6
---

#### 6. Write a C program to evaluate simple interest I = P*R*N / 100

```c
#include <stdio.h>
#include <conio.h>
void main()
{
    float p, r, n, i;

    clrscr();

    printf("Enter p : ");
    scanf("%f", &p);

    printf("Enter r : ");
    scanf("%f", &r);

    printf("Enter n : ");
    scanf("%f", &n);

    i = (p * r * n) / 100;

    printf("Intrest : % f", i);
    getch();
}
```

### Output

![d](outputs\Practical-06.c.jpg)
