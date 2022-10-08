---
sidebar_position: 1
---

#### 1. Write a c program for linear search which find an element in an unsorted list.

```c
#include <stdio.h>
#include <conio.h>

int searchItem(int *, int);

int searchItem(int a[], int search)
{
    int j = 0;

    for (j = 0; j < 5; j++)
    {
        if (a[j] == search)
        {
            return j;
        }
    }
    return -1;
}

void main()
{
    int arr[5] = {18, 30, 15, 70, 12};

    int item = 15;
    int i;

    clrscr();
    // Print the array
    for (i = 0; i < 5; i++)
    {
        printf("%d ", arr[i]);
    }

    // Search for the item
    int result = searchItem(arr, item);

    if (result == -1)
    {
        printf("\nItem Not Found..!\n");
    }
    else
    {
        printf("\nElement %d is found at %d position", item, result);
    }

    getch();
}
```

### Output

![d](output\1.jpg)
