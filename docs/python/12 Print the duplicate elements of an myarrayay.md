---
sidebar_position: 11
---

#### # 12.Write a Python program to print the duplicate elements of an myarrayay.

```python
myarray = [1, 9, 3, 4, 2, 7, 8, 8, 9, 3]

print("Duplicate elements in given myarrayay : ")

for i in range(0, len(myarray)):
    for j in range(i + 1, len(myarray)):
        if(myarray[i] == myarray[j]):
            print(myarray[j])
```
