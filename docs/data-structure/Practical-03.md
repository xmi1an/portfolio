---
sidebar_position: 03
---

#### 10. Write a c program for implementing of stack and its operation.

```c
#include <stdio.h>
#include <conio.h>

#define size 5

void main()
{
    int i, j, temp;
    int arr[size] = {18, 30, 15, 70, 12};

    for (i = 0; i < size - 1; i++)
    {
        for (j = 0; j < size - 1 - i; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    printf("Sorted array is : ");
    for (i = 0; i < 5; i++)
        printf("%d ", arr[i]);
}
```
