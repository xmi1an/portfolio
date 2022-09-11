---
sidebar_position: 7
---

#### 7. Write a C program to enter a distance into K.M and convert it in to meter, feet inches and Centimeter

```c
#include <stdio.h>
#include <conio.h>
void main()
{
    long int km, f, m, cm;
    float i;

    clrscr();

    printf("Enter Kilometer : ");
    scanf("%ld", &km);

    m = km * 1000;
    f = km * 32748;
    i = km * 3448.38;
    cm = km * 100000;

    printf("Meter : %ld \n", m);
    printf("Feet : %ld \n", f);
    printf("\n Inch :%f \n", i);
    printf("\n Centimeter= %ld \n", cm);
}
```

### Output

![d](outputs\Practical-07.c.jpg)
