# Constructor Patterns

### Two ways to create object
```javascript
var obj1 = {};
var obj2 = new Object();
```

### Four ways to modify properties
####Dot Notation
```javascript
obj1.name = 'Arun';
```
####Square Brackets
```javascript
obj1['age'] = 30;
```
####Object.defineProperty
```javascript
Object.defineProperty(obj2, "name", {
    value: "Asha",
    writable: true,
    enumerable: true,
    configurable: true
})
```
####Object.defineProperties
```javascript
Object.defineProperties(obj2, {
    "age": {
        value: 30,
        writable: true
    },
    "city": {
        value: "Mysore",
        writable: false
    }
})
```
##Basic Constructors
```javascript
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.info = function() {
        return `${this.model} has done ${this.miles} miles`;
    }
}

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);
```
##Constructors with prototype
```javascript
function Cars(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Cars.prototype.info = function() {
    return `${this.model} has done ${this.miles} miles`;
}

var bolero = new Cars("Mahindra", 2012, 50000);
var swift = new Cars("Maruti Suzuki", 2019, 10000);
```