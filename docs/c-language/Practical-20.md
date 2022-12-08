---
sidebar_position: 20
---

#### 20. Write a C program to display first 25 Fibonacci nos.

```c
#include <stdio.h>
#include <conio.h>

void main()
{
    int a = 1, b = 1, c, i;
    clrscr();
    printf("Fibonnaci series :\n");
    printf("%d \n", a);
    printf("%d \n", b);

    for (i = 1; i <= 25; i++)
    {
        c = a + b;
        printf("%d \n", c);
        a = b;
        b = c;
    }
    getch();
}
```

<!--
### Output

![d](outputs\20.jpg) -->
