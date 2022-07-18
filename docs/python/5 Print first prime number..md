---
sidebar_position: 4
---


#### 5. Write a Python Program to print first prime number.

```python
num = int(input("Enter range:"))

for i in range(2, num):
    if num % i == 0:
        print(num, "Not a Prime")
        break
else:
    print(num, "is a prime")
```
