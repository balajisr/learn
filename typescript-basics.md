# Typescript Basics

The types that we are going to cover are,

- string
- number
- boolean
- array
- object
- any
- void
- null and undefined
- tuple
- enum
- generics

## String

To have string variable,

```javascript
let aString:string = "Hi"

aString = "Hello";
aString = 5; //typescript error
```

## Number

To have number variable,

```javascript
let aNum:number = 5;

aNum = 9;
aNum = "hi"; //typescript error
```

## Boolean

To have boolean variable,

```javascript
let aBool:boolean = true;

aBool = false;
aBook = null; //typescript error
```

## Any

Try to avoid this as much, as there is no use of using typescript with *any* type.

```javascript
let anyVar:any; //it won't show any typescript error

anyVar = "hi"; //fine
anyVar = 9; //fine
```

## Union

To have two or more types,

```javascript
let year: string | number;

year = "2021";
year = 2021;
year = false; //typescript error

const parsedYear = parseInt(year); //fine
```