---
sidebar_position: 05
---

#### 5. Write a c program for sorting using straight selection sort.

```c

#include <stdio.h>
#include <conio.h>

#define size 6

int main()
{
    int i, min, findMin, temp;

    int arr[size] = {6, 2, 1, 4, 3, 5};

    printf("Before Sort..\n");
    for (i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }

    for (i = 0; i < size - 1; i++)
    {
        min = i;
        for (findMin = i + 1; findMin < size; findMin++)
        {
            if (arr[findMin] < arr[min])
            {
                min = findMin;
            }
        }

        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }

    printf("\n\nAfter Sort..\n");
    for (i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }
}
```

### Output

![d](output\5.jpg)
