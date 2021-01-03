[Scott Allen - Javascript Patterns for 2017](https://www.youtube.com/watch?v=hO7mzO83N1Q)

# ES Modules

**Old Patterns goes away**
```javascript
    (function() {
        "use strict";

    }());
```

- No need to write IIFE, because ES-2015 has module scope.
- Every .js/.ts files are modules now.
- Modules interpret programs in strict mode by default.

### Export
    function work(name) {
        return `${name} is working`;
    }

    class Person {
        constructor(name) {
            this.name = name;
        }
        doWork() {
            return work(this.name);
        }
    }

    export {work, Person}
    export default Person

