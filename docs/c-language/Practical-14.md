---
sidebar_position: 14
---

#### 14. Write a C program to find that the enter number is Negative, or Positive or Zero.

```c
#include <stdio.h>
#include <conio.h>

void main()
{
    int num;
clrscr();
    printf("Enter a number : ");
    scanf("%d", &num);

    if (num > 0)
    {
        printf("%d is a positive number.", num);
    }
    else if (num < 0)
    {
        printf("%d is a negative number.", num);
    }
    else
    {
        printf("You Entered zero");
    }
getch();
}
```

<!--
### Output

![d](outputs\Practical-10.c.jpg)
 -->
