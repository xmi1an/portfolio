---
sidebar_position: 2
---

#### 2. Write a c program for binary search which find the location of a given element in a list.

```c
#include <stdio.h>
#include <conio.h>

int binarySearch(int array[], int x, int low, int high)
{
    while (low <= high) // While there is still a range to search
    {
        int mid = (high + low) / 2; // Find the midpoint of the range

        if (array[mid] == x) // If the midpoint is the item, return it
        {
            return mid;
        }

        /* If the midpoint is less than the item, search the right half of the range */
        else if (array[mid] < x)
        {
            low = mid + 1;
        }

        /* If the midpoint is greater than the item, search the left half of the range */
        else
        {
            high = mid - 1;
        }
    }

    return -1;
}

void main()
{
    int array[10] = {4, 10, 16, 24, 32, 46, 76, 112, 144, 186}; // Sorted array

    int search = 32; // Element to be searched

    clrscr();

    int result = binarySearch(array, search, 0, 9); // Function call

    if (result == -1)
        printf("Not found");
    else
        printf("Element is found at index %d", result);

    getch();
}
```
