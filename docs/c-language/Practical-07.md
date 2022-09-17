---
sidebar_position: 7
---

#### 7. Write a C program to enter a distance into K.M and convert it in to meter, feet inches and Centimeter

```c
#include <stdio.h>
#include <conio.h>
void main()
{
    float km, f, m, cm, i;

    clrscr();

    printf("Enter Kilometer : ");
    scanf("%f", &km);

    m = km * 1000;
    f = km * 3280.84;
    i = km * 39370;
    cm = km * 100000;

    printf("Meter : %.2f \n", m);
    printf("Feet : %.2f \n", f);
    printf("\n Inch :%.2f \n", i);
    printf("\n Centimeter= %.2f \n", cm);
}
```

### Output

![d](outputs\Practical-07.c.jpg)
