<!-- Note: This file is automatically generated from source code comments. Changes made in this file will be overridden. -->

# Function count

Count the number of elements of a matrix, array or string.


## Syntax

```js
math.count(x)
```

### Parameters

Parameter | Type | Description
--------- | ---- | -----------
`x` | string &#124; Array &#124; Matrix | A matrix or string

### Returns

Type | Description
---- | -----------
number | An integer with the elements in `x`.


## Examples

```js
math.count('hello world')        // returns 11
const A = [[1, 2, 3], [4, 5, 6]]
math.count(A)                    // returns 6
math.count(math.range(1,6))      // returns 5
```


## See also

[size](size.md)