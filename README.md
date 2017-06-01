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
length      // magnitude
lengthSq    // squared length - if only comparison is needed, this is faster
angle       // angle in radians
degrees     // angle in degrees
```

## Manipulation
Possible `value`:
- single number (second axis is the same)
- double number (x, y)
- instance of Vector
- Array [x, y]

Returns a mutated instance of `Vector`

```javascript
set(value)
add(value)
subtract(value)
multiply(value)
divide(value)
```

```javascript
negate()
normalize([number])   // modifies the length to 1, otherwise to number
limit([number])       // modifies the length to number if it's greater than number
rotate(angle)         // CCW rotation in radians
rotateDeg(angle)      // CCW rotation in degrees
```

## Products
Returns a `number`
```javascript
dot(vector)
cross(vector)
distance(vector)
distanceSq(vector)    // squared distance - if only comparison is needed, this is faster
angleTo(vector)       // angle to vector in radians
degreesTo(vector)     // angle to vector in degrees
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
irotate(angle)
irotateDeg(angle)
```

## Static
```javascript
Vector.random(x, y)   // create vector with random position in the given axes
Vector.receive(x, y)  // get vector with given position from the pool, default [0, 0]
Vector.release()      // push vector back to the pool
```
