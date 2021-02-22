Info - [codeSTACKr Typescript Basics](https://www.youtube.com/watch?v=wyO8RWl1ges)

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

```typescript
let aString:string = "Hi"

aString = "Hello";
aString = 5; //typescript error
```

## Number

To have number variable,

```typescript
let aNum:number = 5;

aNum = 9;
aNum = "hi"; //typescript error
```

## Boolean

To have boolean variable,

```typescript
let aBool:boolean = true;

aBool = false;
aBook = null; //typescript error
```

## Any

Try to avoid this as much, as there is no use of using typescript with *any* type.

```typescript
let anyVar:any; //it won't show any typescript error

anyVar = "hi"; //fine
anyVar = 9; //fine
```

## Union

To have two or more types,

```typescript
let year: string | number;

year = "2021";
year = 2021;
year = false; //typescript error

const parsedYear = parseInt(year); //fine
```

## Arrays

### Strings Arrays

```typescript
let arrString:string[] = ['a','b','c'];

arrString[0] = 1; //typescript error
arrString.push(5); //typescript error
arrString.push('d'); //fine
```

### Numbers Arrays

```typescript
let arrNumber:number[] = [1,2,3];

arrNumber[0] = "5"; //typescript error
arrNumber.push(4); //fine
```

### Boolean Array

```typescript
let arrBool:boolean[] = [true, false];

arrBool[0] = "3"; //typescript error
arrBool.push(5); //typescript error
arrBool.push(false); //fine
```

### Mixed Array

```typescript
let arrMix: (string | number | boolean)[] = [1, "a", true];

arrMix[0] = "b";
arrMix.push(false);
arrMix.push(null); //typescript error;
```

## Tuples

If we need to give specific type to particular position in an array.

```typescript
let arrTup: [string, number] = ["string", 5];
arrTup[0] = "str"; //fine
arrTup[0] = 9; //typscript error
```

## Custom Type (aliases)

```typescript
type stringOrNum = string | number;

let year: stringOrNum;
year = 2021;
year = "2021";
```

## Function type

```typescript
function calcSum(a:number, b:number) {
    return a + b;
}

calcSum(2, 3); //fine
calcSum("2", 3); //typescript error
```

In order to define function to a variable, we can use

```typescript
let calcSum: (a:number, b:number) => number;

//this function accepts two number arguments and returns a number
calcSum = (num1, num2) => {
    return num1 + num2;
}
```

Sometimes, we encounter a optional parameter to a function, in that case we can use ```?``` as optional param

```typescript
let calcSum: (a:number, b:number, c?:number) => number;

calcSum(2, 3, 4); //fine
calcSum(2, 3); //fine
```