# vector

A small (1.1k when gzipped) JavaScript 2D Vector Library, built in the UMD standards. In addition to a number of methods its main advantage is the ability to choose **mutability of the operation**.

## Utility
```javascript
clone()
equals(vector)
```

## Properties
Getters and Setters
```javascript
x
y
length   // magnitude
angle    // angle in degrees
radians  // angle in radians
```

## Manipulation
Possible `value`:
- single number (second axis is the same)
- double number (x, y)
- instance of Vector
- Array [x, y]

Return a mutated instance of `Vector`

```javascript
set(value)
add(value)
subtract(value)
multiply(value)
divide(value)
```

```javascript
negate()
normalize([number])   // norm to 1, otherwise to number
limit([number])       // norm to number if the length is greater than number
magnitude(number)     // chainable alias of length setter
rotate(angle)         // CCW rotation in degrees
```

## Products
Return a `number`
```javascript
dot(vector)
cross(vector)
distance(vector)
angleTo(vector)       // angle to vector in degrees
radiansTo(vector)     // angle to vector in radians
```

## Immutable
All of this methods act like a above but instead of mutate current vector, return new instance of `Vector` with applied changes. This makes possible to use both types interchangeably.
```javascript
iset(value)
iadd(value)
isubtract(value)
imultiply(value)
idivide(value)

inegate()
inormalize([number])
ilimit([number])
imagnitude(number)
irotate(angle)
```

## Static
```javascript
Vector.random(x, y)   // create vector with random position in the given axes
```
