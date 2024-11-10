# Solution

Since we're looking for a first non-repeating (unique) character in a string, 
I've decided to approach the solution in a time-performant manner, we know the string 
can be any length from 1 character long to 100,000 characters long and be composed entirely
of lower-case letters a-z. Therefore instead of transforming the string into an array and calculating the
total occurrences of each letter we can instead limit that loop to all unique letters in that string.

To achieve that we can use a **Set**:
```typescript
const uniqueChars = [...new Set(text.split(''))]
```

Since a **Set** in javascript does not contain duplicated entries (it's implemented as a hashmap) we immediately get only the unique characters
in the string limiting the loop to a max of 26 iterations (ASCII letters). 
We can optimize it further with using ```Array.prototype.some``` method instead of ```Array.prototype.forEach```.
By using ```Array.prototype.some``` we can bail out once we find the first occurrence improving the best-case scenario down to **O(1)** time.

The actual checking and looking for the index can be as simple as comparing the results of 
```String.prototype.indexOf``` and ```String.prototype.lastIndexOf``` since the character is unique, the returned values
must match, otherwise the character isn't unique. 

Using this approach we can find the letter in **O(n) time** with n being the length of input text.