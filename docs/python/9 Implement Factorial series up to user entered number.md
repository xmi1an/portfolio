---
sidebar_position: 8
---

#### 9. Write a Python program to implement Factorial series up to user entered number.

```python
num = int(input("Enter a number: "))
factorial = 1

for i in range(1, num+1):
    factorial = factorial * i
    print(factorial)

print("The factorial of", num, "is", factorial)
```
