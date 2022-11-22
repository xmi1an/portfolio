---
sidebar_position: 9
---

#### 9. Write a C program to convert Fahrenheit into centigrade.

```c
#include <stdio.h>
#include <conio.h>
void main()
{
    int f;
    float c;

    clrscr();

    printf("\nEnter the value of f : ");
    scanf("%d", &f);

    c = (f - 32) / 1.8;
    printf("\nCentigrade : %f", c);
}
```

### Output

![d](outputs\Practical-09.c.jpg)
