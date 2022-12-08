---
sidebar_position: 21
---

#### 21. Write a C program to check the accepted number is prime number or not.

```c
#include <stdio.h>
#include <conio.h>
void main()
{
    int no, i;

    printf("Enter number:");
    scanf("%d", &no);

    for (i = 2; i <= no / 2; i++)
    {
        if (no % i == 0)
            break;
    }

    if (i == no)
        printf("this number is prime \n");
    else
        printf("this number is not prime \n");
}
```

<!--
### Output

![d](outputs\21.jpg)
 -->
