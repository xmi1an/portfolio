---
sidebar_position: 5
---

#### 5. Write a C program to find the area and volume of sphere. Formulas are Area = 4\* PI \*R \*R Volume = (4/3) \* PI \*R \* R \*R.

```c
#include <stdio.h>
#include <conio.h>

void main()
{
    float pi = 3.14;
    float area, vol;
    int r;

    clrscr();

    printf("\n Enter the Value of r : ");
    scanf("%d", &r);

    area = 4 * pi * r * r;
    vol = 4 / 3 * pi * r * r * r;

    printf("\n Area : %f", area);
    printf("\n Volume : %f", vol);

    getch();
}
```

### Output

![d](outputs\Practical-05.c.jpg)
