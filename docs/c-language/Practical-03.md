---
sidebar_position: 2
---

#### 3. write a C program to find the area of circle using the formula Area = PI \* r \* r.

```c
#include <stdio.h>
#include <conio.h>
void main()
{
    float pi = 3.14;
    float r, area;

    clrscr();

    printf("\n");
    printf("Enter the value of r : ");
    scanf("%f", &r);

    area = pi * r * r;

    printf("Area : %f", area);

    getch();
}
```

### Output

![d](outputs\Practical-03.c.jpg)
