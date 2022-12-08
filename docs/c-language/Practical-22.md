---
sidebar_position: 22
---

#### 22. Write a C program to display first 100 prime numbers.

```c
#include <stdio.h>
#include <conio.h>
void main()
{
    int i, j, no = 0;
    clrscr();
    for (i = 0; no != 100; i++)
    {
        for (j = 2; j <= no; j++)
        {
            if (i % j == 0)
                break;
        }
        if (i == j)
        {
            printf("%d\n", i);
        }
        no++;
    }
}
```

<!--
### Output

![d](outputs\22.jpg)
 -->
