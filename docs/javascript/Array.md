## Array

### 数组属性

#### constructor

返回对象的构造函数。返回的是函数的引用，而不是函数名。

- JavaScript 数组 constructor 属性返回 **function Array() { \[native code\] }**

- JavaScript 数字 constructor 属性返回 **function Number() { \[native code\] }**

- JavaScript 字符串 constructor 属性返回 **function String() { \[native code\] }**

```javascript
const arr = [1, 2, 3]
console.log(arr.constructor) // function Array() { [native code] }

const num = 10
console.log(num.constructor) // function Number() { [native code] }

const str = 'hello'
console.log(str.constructor) // function String() { [native code] }
```

#### length

返回数组的长度。

```javascript
const arr = [1, 2, 3]
console.log(arr.length) // 3
```

#### prototype

返回数组的原型对象。使您有能力向对象添加属性和方法。

当构建一个属性, 所有的数组都将被设置属性, 它是默认值。

当构建一个方法时, 所有的数组都可以使用该方法。

**注意**: Array.prototype 单独不能引用数组, Array() 对象可以。

**注意**: 在 JavaScript 对象中,Prototype 是一个全局属性。

```javascript
const arr = [1, 2, 3]
console.log(arr.prototype) // undefined
```

### 数组方法

| 方法            | 描述                                                                                           |
| --------------- | ---------------------------------------------------------------------------------------------- |
| concat          | 连接两个或多个数组，并返回结果                                                                 |
| copyWithin      | 从数组的指定位置拷贝数组到数组的另一个指定位置中                                               |
| entries         | 返回数组的可迭代对象                                                                           |
| every           | 测试数组的所有元素是否都符合指定条件                                                           |
| fill            | 用一个固定值填充数组                                                                           |
| filter          | 检测数组元素, 并返回符合条件所有元素的数组                                                     |
| find            | 返回符合传入测试(函数)条件的数组元素                                                           |
| findIndex       | 返回符合传入测试(函数)条件的数组元素的索引                                                     |
| forEach         | 数组每个元素都执行一次回调函数                                                                 |
| from            | 通过给定的对象中创建一个数组。                                                                 |
| includes        | 判断一个数组是否包含一个指定的值                                                               |
| indexOf         | 搜索数组中的元素,并返回它所在的位置                                                            |
| isArrray        | 判断对象是否为数组                                                                             |
| join            | 把数组的所有元素放入一个字符串                                                                 |
| keys            | 返回数组的可迭代对象, 包含原始数组的键                                                         |
| lastIndexOf     | 搜索数组中的元素,并返回它最后一次出现的位置                                                    |
| map             | 通过指定函数处理数组的每一个元素, 并返回处理后的数组                                           |
| pop             | 删除数组的最后一个元素并返回删除的元素                                                         |
| push            | 在数组的末尾添加一个或多个元素, 并返回新的长度                                                 |
| reduce          | 将数组元素计算为一个值(从左到右)                                                               |
| reduceRight     | 将数组元素计算为一个值(从右到左)                                                               |
| reverse         | 反转数组中元素的顺序                                                                           |
| shift           | 删除并返回数组的第一个元素                                                                     |
| slice           | 选取数组的一部分, 并返回一个新数组                                                             |
| some            | 检测数组中是否有元素符合指定条件                                                               |
| sort            | 对数组元素进行排序                                                                             |
| splice          | 从数组中添加/删除元素                                                                          |
| toString        | 把数组转化为字符串, 并返回结果                                                                 |
| unshift         | 在数组的开头添加一个或多个元素, 并返回新的长度                                                 |
| valueOf         | 返回数组对象的原始值                                                                           |
| Array.of()      | 将一组值转换为数组                                                                             |
| Array.at()      | 用于接收一个整数值并返回该索引对应的元素, 运行正数和负数。负整数从数组中的最后一个元素开始倒数 |
| Array.flat()    | 创建一个新的数组, 这个新数组有原来数组中的每个元素都调用一次提供的函数后的返回值组成           |
| Array.flatMap() | 使用映射函数映射每个元素, 然后将结果压缩成一个新数组                                           |

#### concat()

concat() 方法用于连接两个或多个数组，并返回结果。

该方法不会改变现有数组，而是返回一个新数组。

**语法**: `array1.concat(array2, array3...)`

**参数说明**:

- `array2, array3...`: 要连接的数组。

**返回值**: 返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 concat()操作的参数是数组, 那么添加的是数字中的元素, 而不是数组。

```javascript
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = arr1.concat(arr2) // [1, 2, 3, 4, 5, 6]
const arr4 = arr1.concat(arr2, 7, 8) // [1, 2, 3, 4, 5, 6, 7, 8]
```

#### copyWithin()

copyWithin() 方法从数组的指定位置拷贝数组到数组的另一个指定位置中。

**语法**: `array.copyWithin(target, start, end)`

**参数说明**:
|参数|描述|
|-|-|
|target|必需。复制到指定目标索引位置|
|start|可选。元素复制的起始位置，默认为 0|
|end|可选。停止复制的索引位置，默认为数组长度。如果是负值,表示倒数|

```javascript
const arr = [1, 2, 3, 4, 5]
arr.copyWithin(0, 3) // [4, 5, 3, 4, 5]
arr.copyWithin(0, 1, 3) // [2, 3, 3, 4, 5]
arr.copyWithin(0, -2, -1) // [4, 2, 3, 4, 5]
```

#### entries()

entries() 方法返回数组的可迭代对象, 该对象包含数组中每个索引的键值对(key/value)。

迭代对象中数组的索引值作为 key, 数组元素作为 value。

**语法**: `array.entries()`

**返回值**: 返回一个新的迭代对象。

```javascript
const arr = [1, 2, 3]
const iterator = arr.entries()
console.log(iterator.next().value) // [0, 1]
console.log(iterator.next().value) // [1, 2]
console.log(iterator.next().value) // [2, 3]
```

#### every()

every() 方法测试数组的所有元素是否都符合指定条件(通过函数提供)。

evety() 方法使用指定函数检测数组中的所有元素:

- 如果数组中检测到有一个元素不满足, 则整个表达式返回 false, 且剩余的元素不会再进行检测。

- 如果所有元素都满足条件, 则返回 true。

**注意**: every() 方法不会对空数组进行检测。

**注意**: every() 方法不会改变原数组。

**语法**: `array.every(function(currentValue, index, arr), thisValue)`

**参数说明**:
|参数|描述|
|-|-|
|function(currentValue, index, arr)|必需。函数,数组中的每个元素都会执行这个函数。函数接受三个参数: currentValue, index, arr。currentValue 是数组中正在处理的元素, index 是正在处理的元素的索引, arr 是数组本身。函数返回 true 或 false, 表示当前元素是否满足测试条件。|
|thisValue|可选。对象作为该执行回调时使用, 传递给函数, 用作"this"的值。如果省略, "this"的中为 undefined。|

**返回值**: 布尔值。如果所有元素都满足测试函数, 则返回 true, 否则返回 false。

```javascript
const arr = [1, 2, 3, 4, 5]
const isEven = (num) => num % 2 === 0
const isGreaterThan3 = (num) => num > 3

console.log(arr.every(isEven)) // false
console.log(arr.every(isGreaterThan3)) // false
console.log(arr.every((num) => num > 0)) // true
```

#### fill()

fill() 方法用一个固定值填充数组。

**语法**: `array.fill(value, start, end)`

**参数说明**:
|参数|描述|
|-|-|
|value|必需。填充的值|
|start|可选。开始填充位置|
|end|可选。停止填充位置(默认为 array.length)|

**返回值**: 返回填充后的数组。

```javascript
const arr = [1, 2, 3, 4, 5]
arr.fill(0, 2, 4) // [1, 2, 0, 0, 5]
```

#### filter()

filter() 方法创建一个新数组, 新数组中包含的元素是通过检查指定数组中符合条件的所有元素。

**注意**: filter() 不会对空数组进行检测。

**注意**: filter() 方法不会改变原数组。

**语法**: `array.filter(function(currentValue, index, arr), thisValue)`

**参数说明**:
|参数|描述|
|-|-|
|function(currentValue, index, arr)|必需。函数,数组中的每个元素都会执行这个函数。函数接受三个参数: currentValue, index, arr。currentValue 是数组中正在处理的元素, index 是正在处理的元素的索引, arr 是数组本身。函数返回 true 或 false, 表示当前元素是否符合测试条件。|
|thisValue|可选。对象作为该执行回调时使用, 传递给函数, 用作"this"的值。如果省略, "this"的中为 undefined。|

**返回值**: 返回新数组, 包含符合条件的所有元素。如果没有符合条件的元素则返回空数组。

```javascript
const arr = [1, 2, 3, 4, 5]
const isEven = (num) => num % 2 === 0
const isGreaterThan3 = (num) => num > 3

console.log(arr.filter(isEven)) // [2, 4]
console.log(arr.filter(isGreaterThan3)) // [4, 5]
console.log(arr.filter((num) => num > 0)) // [1, 2, 3, 4, 5]
```

#### find()

find() 方法返回数组中满足提供的测试函数的第一个元素的值。

find() 方法为数组中的每个元素都调用一次函数执行:

- 当数组中的元素在测试条件返回 true 时, find() 返回符合条件的元素, 之后的值不会在调用执行此函数。

- 如果没有符合条件的元素返回 undefined

**注意**: find() 对于空数组, 函数是不会执行的。

**注意**: find() 并没有改变数组的原始值。

**语法**: `array.find(function(currentValue, index, arr), thisValue)`

**参数说明**:
|参数|描述|
|-|-|
|function(currentValue, index, arr)|必需。函数,数组中的每个元素都会执行这个函数。函数接受三个参数: currentValue, index, arr。currentValue 是数组中正在处理的元素, index 是正在处理的元素的索引, arr 是数组本身。函数返回 true 或 false, 表示当前元素是否符合测试条件。|
|thisValue|可选。传递给函数的值一般用 "this" 值。
如果这个参数为空， "undefined" 会传递给 "this" 值|

**返回值**: 返回符合条件的第一个元素的值, 如果没有符合条件的则返回 `undefined`。

```javascript
const arr = [1, 2, 3, 4, 5]
const isEven = (num) => num % 2 === 0
const isGreaterThan3 = (num) => num > 3

console.log(arr.find(isEven)) // 2
console.log(arr.find(isGreaterThan3)) // 4
console.log(arr.find((num) => num > 5)) // undefined
```

#### findIndex()

findIndex() 方法返回数组中满足提供的测试函数的第一个元素的索引。

findIndex() 方法为数组中的每个元素都调用一次函数执行:

- 当数组中的元素在测试条件返回 true 时, findIndex() 返回符合条件的元素的索引位置, 之后的值不会在调用执行此函数。

- 如果没有符合条件的元素返回 -1。

**注意**: findIndex() 对于空数组, 函数是不会执行的。

**注意**: findIndex() 并没有改变数组的原始值。

**语法**: `array.findIndex(function(currentValue, index, arr), thisValue)`

**参数说明**:
|参数|描述|
|-|-|
|function(currentValue, index, arr)|必需。函数,数组中的每个元素都会执行这个函数。函数接受三个参数: currentValue, index, arr。currentValue 是数组中正在处理的元素, index 是正在处理的元素的索引, arr 是数组本身。函数返回 true 或 false, 表示当前元素是否符合测试条件。|
|thisValue|可选。传递给函数的值一般用 "this" 值。
如果这个参数为空， "undefined" 会传递给 "this" 值|

**返回值**: 返回符合条件的第一个元素的索引位置, 如果没有符合条件的则返回 -1。

```javascript
const arr = [1, 2, 3, 4, 5]
const isEven = (num) => num % 2 === 0
const isGreaterThan3 = (num) => num > 3

console.log(arr.findIndex(isEven)) // 1
console.log(arr.findIndex(isGreaterThan3)) // 3
console.log(arr.findIndex((num) => num > 5)) // -1
```

#### forEach()

forEach() 方法用于调用数组的每个元素, 并将元素传递给回调函数。

**注意**: forEach() 对于空数组是不会执行回调函数的。

**语法**: `array.forEach(function(currentValue, index, arr), thisValue)`

**参数说明**:
|参数|描述|
|-|-|
|function(currentValue, index, arr)|必需。函数,数组中的每个元素都会执行这个函数。函数接受三个参数: currentValue, index, arr。currentValue 是数组中正在处理的元素, index 是正在处理的元素的索引, arr 是数组本身。|
|thisValue|可选。传递给函数的值一般用 "this" 值。
如果这个参数为空， "undefined" 会传递给 "this" 值|

**返回值**: 无。

```javascript
const arr = [1, 2, 3, 4, 5]
const logValue = (num) => console.log(num)

arr.forEach(logValue) // 1 2 3 4 5
```

#### from()

from() 方法用于通过拥有 length 属性的对象或可迭代的对象来返回一个数组。

如果对象是数组返回 true，否则返回 false。

**语法**: `Array.from(object, mapFn, thisArg)`

**参数说明**:
|参数|描述|
|-|-|
|object|必需。要转换为数组的对象|
|mapFn|可选。数组中每个元素要调用的函数。|
|thisArg|可选。映射函数(mapFunction)中的 this 对象。|

**返回值**: 返回一个新数组。

```javascript
const obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 }
const arr = Array.from(obj)

console.log(arr) // ["a", "b", "c"]
```

#### includes()

includes() 方法用来判断一个数组是否包含一个指定的值, 如果包含则返回 true, 否则返回 false。

**语法**: `array.includes(searchElement, fromIndex)`

**参数说明**:
|参数|描述|
|-|-|
|searchElement|必需。需要查找的元素值|
|fromIndex|可选。从该索引处开始查找 searchElement。如果为负值, 则按升序从 array.length + fromIndex 的索引开始搜索,默认为 0|

**注意**:

- 如果 fromIndex 大于等于数组长度, 则方法返回 false。该数组不会被搜索。

#### includes()

includes() 方法用来判断一个数组是否包含一个指定的值, 如果包含则返回 true, 否则返回 false。

**语法**: `array.includes(searchElement, fromIndex)`

**参数说明**:
|参数|描述|
|-|-|
|searchElement|必需。需要查找的元素值|
|fromIndex|可选。从该索引处开始查找 searchElement。如果为负值, 则按升序从 array.length + fromIndex 的索引开始搜索,默认为 0|

**注意**:

- 如果 fromIndex 大于等于数组长度, 则方法返回 false。该数组不会被搜索。

- 如果 fromIndex 为负值, 则 fromIndex 会被转换为 0。

**返回值**: 布尔值。如果找到指定值则返回 true, 否则返回 false。

```javascript
const arr = [1, 2, 3, 4, 5]

console.log(arr.includes(3)) // true
console.log(arr.includes(6)) // false
```

#### indexOf()

indexOf() 方法用来查找数组中元素的第一个出现位置。

该方法将从头到尾地检索数组, 看它是否含有对应的元素。开始检索的位置在数组 start 处或数组的开头(没有指定 start 参数时)。如果找到一个 item, 则返回 item 第一次出现的位置。开始位置的索引为 0。

如果在数组中没找到指定元素则返回 -1。

**语法**: `array.indexOf(item, start)`

**参数说明**:
|参数|描述|
|-|-|
|item|必需。查找的元素|
|start|可选的整数参数。规定在数组中开始检索的位置。它的合法值是 0 到 stringObject.length - 1。则将从字符串的首字符开始检索。|

**返回值**: 元素在数组中的位置, 如果没有找到则返回 -1。

```javascript
const arr = [1, 2, 3, 4, 5]

console.log(arr.indexOf(3)) // 2
console.log(arr.indexOf(6)) // -1
```

#### isArray()

用于判断一个对象是否为数组。

如果对象是数组返回 true, 否则返回 false。

**语法**: `Array.isArray(obj)`

**参数说明**:
|参数|描述|
|-|-|  
|obj|必需, 要判断的对象|

**返回值**: 布尔值。如果对象是数组则返回 true, 否则返回 false。

```javascript
console.log(Array.isArray([1, 2, 3])) // true
console.log(Array.isArray({})) // false
```

#### join()

join() 方法用于将数组中的所有元素转换为一个字符串。

元素是通过指定的分隔符进行分隔的。

**语法**: `array.join(separator)`

**参数说明**:
|参数|描述|
|-|-|
|separator|可选。指定要使用的分隔符。如果省略, 则使用逗号作为分隔符|

**返回值**: 返回一个字符串。该字符串是通过把 arrayObject 的每个元素转换为字符串, 然后把这些字符串连接起来, 在两个元素之间插入 separator 字符串而生成的。

```javascript
const arr = [1, 2, 3, 4, 5]

console.log(arr.join()) // "1,2,3,4,5"
console.log(arr.join(' ')) // "1 2 3 4 5"
```

#### keys()

keys() 方法用于从数组创建一个包含数字键的可迭代对象。

如果对象是数组返回 true, 否则返回 false。

**语法**: `array.keys()`

**返回值**: 返回一个数组迭代对象。

```javascript
const arr = [1, 2, 3]
const iterator = arr.keys()
console.log(iterator.next().value) // 0
console.log(iterator.next().value) // 1
console.log(iterator.next().value) // 2
```

#### lastIndexOf()

lastIndexOf() 方法返回一个指定元素在数组中最后出现的位置, 从该字符串的后面向前查找。

如果要检索的元素没有出现, 则该方法返回 -1。

该方法将从尾到头地检索数组中指定元素 item。开始检索的位置在数组的 start 处或数组的结尾(没有指定 start 参数时)。如果找到一个 item, 则返回 item 从尾向前检索第一次出现在数组的位置。数组的索引开始位置是从 0 开始的。

如果在数组中没有找到指定元素则返回 -1。

**语法**: `array.lastIndexOf(item, start)`

**参数说明**:
|参数|描述|
|-|-|
|item|必需。规定需检索的字符串值|
|start|可选的整数参数。规定在数组中开始检索的位置。它的合法值是 0 到 stringObject.length - 1。则将从字符串的最后一个字符开始检索。|

**返回值**: 如果在 stringObject 中的 fromIndex 位置之前存在 searchValue, 则返回的是出现的最后一个 searchValue 的位置。

```javascript
const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]

console.log(arr.lastIndexOf(3)) // 6
console.log(arr.lastIndexOf(6)) // -1

console.log(arr.lastIndexOf(1, 5)) // 0
```

#### map()

map() 方法创建一个新数组, 数组中的元素为原始数组元素调用函数处理后的值。

map() 方法按照原始数组顺序依次处理元素。

**注意**: map() 不会对空数组进行检测。

**注意**: map() 方法不会改变原数组。

**语法**: `array.map(function(currentValue, index, arr), thisValue)`

**参数说明**:
|参数|描述|
|-|-|
|function(currentValue, index, arr)|必需。函数,数组中的每个元素都会执行这个函数。函数接受三个参数: currentValue, index, arr。currentValue 是数组中正在处理的元素, index 是正在处理的元素的索引, arr 是数组本身。函数返回一个新的元素值。|
|thisValue|可选。对象作为该执行回调时使用, 传递给函数, 用作"this"的值。如果省略了 thisValue, 或者传入 null 或 undefined, 那么回调函数的 this 为全局对象。|

**返回值**: 返回一个新数组, 数组中的元素为原始数组调用函数处理后的值。

```javascript
const arr = [1, 2, 3, 4, 5]
const double = (num) => num * 2

console.log(arr.map(double)) // [2, 4, 6, 8, 10]
```

#### pop()

pop() 方法从数组中删除最后一个元素, 并返回该元素的值。

**注意**: 此方法改变数组的长度。

**语法**: `array.pop()`

**返回值**: 返回数组中最后一个元素的值。如果数组为空, 则返回 undefined。

```javascript
const arr = [1, 2, 3, 4, 5]

console.log(arr.pop()) // 5
console.log(arr) // [1, 2, 3, 4]
```

#### push()

push() 方法可向数组的末尾添加一个或多个元素, 并返回新的长度。

**注意**: 新元素将添加在数组的末尾。

**注意**: 此方法改变数组的长度。

**语法**: `array.push(item1, ..., itemX)`

**参数说明**:
|参数|描述|
|-|-|
|item1, ..., itemX|必需。要添加到数组末尾的元素|

**返回值**: 返回数组的新长度。

```javascript
const arr = [1, 2, 3, 4, 5]

console.log(arr.push(6, 7, 8)) // 8
console.log(arr) // [1, 2, 3, 4, 5, 6, 7, 8]
```

#### reduce()

reduce() 方法接收一个函数作为累加器, 数组中的每个值 (从左到右) 开始缩减, 最终计算为一个值。

reduce() 可以作为一个高阶函数, 用于函数的 compose。

**注意**: reduce() 对于空数组是不会执行回调函数的。

**语法**: `array.reduce(function(total, currentValue, currentIndex, arr), initialValue)`

**参数说明**:
|参数|描述|
|-|-|
|function(total, currentValue, currentIndex, arr)|必需。函数,数组中的每个元素都会执行这个函数。函数接受四个参数: total, currentValue, currentIndex, arr。total 是累计器, 初始值为 initialValue, 或者上一次调用回调函数的返回值。currentValue 是数组中正在处理的元素, currentIndex 是正在处理的元素的索引, arr 是数组本身。函数返回一个新的累计值。|
|initialValue|可选。传递给函数的初始值。|

**返回值**: 返回计算结果。

```javascript
const arr = [1, 2, 3, 4, 5]
const sum = (total, currentValue) => total + currentValue

console.log(arr.reduce(sum)) // 15
console.log(arr.reduce(sum, 10)) // 25
```

#### reduceRight()

reduceRight() 方法的功能和 reduce() 的功能是一样的， 不同的是 reduceRight() 是从数组的末尾向前将数组中的数组项做累加。

**注意**: reduceRight() 对于空数组是不会执行回调函数的。

**语法**: `array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)`

**参数说明**:
|参数|描述|
|-|-|
|function(total, currentValue, currentIndex, arr)|必需。函数,数组中的每个元素都会执行这个函数。函数接受四个参数: total, currentValue, currentIndex, arr。total 是累计器, 初始值为 initialValue, 或者上一次调用回调函数的返回值。currentValue 是数组中正在处理的元素, currentIndex 是正在处理的元素的索引, arr 是数组本身。函数返回一个新的累计值。|
|initialValue|可选。传递给函数的初始值。|

**返回值**: 返回计算结果。

```javascript
const arr = [1, 2, 3, 4, 5]
const sum = (total, currentValue) => total + currentValue

console.log(arr.reduceRight(sum)) // 15
console.log(arr.reduceRight(sum, 10)) // 25
```

#### reverse()

reverse() 方法用于颠倒数组中元素的顺序。

**语法**: `array.reverse()`

**返回值**: 返回颠倒顺序后的数组。

```javascript
const arr = [1, 2, 3, 4, 5]

console.log(arr.reverse()) // [5, 4, 3, 2, 1]
```

#### shift()

shift() 方法用于把数组的第一个元素从其中删除, 并返回第一个元素的值。

**注意**: 此方法改变数组的长度。

**语法**: `array.shift()`

**返回值**: 任意类型, 数组原来的第一个元素值(移除的元素)。数组元素可以是一个字符串，数字，数组，布尔，或者其他对象类型。

```javascript
const arr = [1, 2, 3, 4, 5]

console.log(arr.shift()) // 1
console.log(arr) // [2, 3, 4, 5]
```

#### slice()

slice() 方法可从已有的数组中返回选定的元素。

slice() 方法可提取字符串的某个部分, 并以新的字符串返回被提取的部分。

**注意**: slice() 方法不会改变原数组。

**语法**: `array.slice(start, end)`

**参数说明**:
|参数|描述|
|-|-|
|start|可选。规定从何处开始选取。如果该参数为负数, 则表示从原数组中的倒数第几个元素开始提取, slice(-2) 表示提取原数组中倒数第二个元素到最后一个元素(包含最后一个元素)|
|end|可选。规定从何处结束选取。该参数是数组片断结束处的索引。如果没有指定该参数, 那么切分的数组包含从 start 到数组结束的所有元素。如果该参数为负数, 则表示从原数组中的倒数第几个元素结束提取, slice(-2, -1) 表示提取原数组中第二个元素到最后一个元素(不包含最后一个元素, 也就是只有倒数第二个元素)|

**返回值**: 返回一个新数组, 包含从 start 到 end (不包括该元素) arrayObject 中的元素。

```javascript
const arr = [1, 2, 3, 4, 5]

console.log(arr.slice(2)) // [3, 4, 5]
console.log(arr.slice(2, 4)) // [3, 4]
console.log(arr.slice(-2)) // [4, 5]
console.log(arr.slice(-2, -1)) // [4]
```

#### some()

some() 方法用于检测数组中的元素是否满足指定条件(函数提供)。

some() 方法会依次执行数组的每个元素:

- 如果有一个元素满足条件, 则表达式返回 true, 剩余的元素不会再执行检测。

- 如果没有元素满足条件, 则表达式返回 false。

**注意**: some() 不会对空数组进行检测。

**注意**: some() 方法不会改变原数组。

**语法**: `array.some(function(currentValue, index, arr), thisValue)`

**参数说明**:
|参数|描述|
|-|-|
|function(currentValue, index, arr)|必需。函数,数组中的每个元素都会执行这个函数。函数接受三个参数: currentValue, index, arr。currentValue 是数组中正在处理的元素, index 是正在处理的元素的索引, arr 是数组本身。|
|thisValue|可选。对象作为该执行回调时使用, 传递给函数, 用作"this"的值。如果省略了 thisValue, 或者传入 null 或 undefined, 那么回调函数的 this 为全局对象。|

**返回值**: 布尔值。如果数组中有元素满足条件则返回 true, 否则返回 false。

```javascript
const arr = [1, 2, 3, 4, 5]
const isEven = (num) => num % 2 === 0

console.log(arr.some(isEven)) // true
console.log(arr.some((num) => num > 5)) // false
```

#### sort()

sort() 方法用于对数组的元素进行排序。

排序可以是字母或者数字, 并按升序或者降序。

默认排序顺序为按字母升序。

**注意**: 当数字是按字母顺序排列时, "40"将排在"5"前面。

使用数字排序, 你必须通过一个函数作为参数来调用。

函数指定数字是按照升序还是降序排列。

**注意**: sort() 方法会改变原数组。

**语法**: `array.sort(sortFunction)`

**参数说明**:
|参数|描述|
|-|-|
|sortFunction|可选。规定顺序排序, 必须是函数。|

**返回值**: 对数组的引用。请注意, 数组在原数组上进行排序, 不生成副本。

```javascript
const arr = [5, 3, 1, 4, 2]

arr.sort()
console.log(arr) // [1, 2, 3, 4, 5]

arr.sort((a, b) => a - b)
console.log(arr) // [1, 2, 3, 4, 5]

const arr2 = ['banana', 'apple', 'orange', 'pear']

arr2.sort()
console.log(arr2) // ["apple", "banana", "orange", "pear"]

arr2.sort((a, b) => a.localeCompare(b)) // 按字母顺序排序
console.log(arr2) // ["apple", "banana", "orange", "pear"]
```

#### splice()

splice() 方法用于添加或删除数组中的元素。

**注意**: splice() 方法会改变原数组。

**语法**: `array.splice(start, howmany, item1, ..., itemX)`

**参数说明**:
|参数|描述|
|-|-|
|start|必需。规定从何处添加/删除元素。<br> 该参数是开始插入和(或)删除的数组元素的下标, 必须是数字。|
|howmany|可选。规定应该删除多少元素。必须是数组, 但可以是"0"。<br> 如果未规定此参数, 则删除从 start 开始到数组结尾的所有元素。|
|item1, ..., itemX|可选。要添加到数组中的元素, 必须是数组元素或逗号分隔的元素列表。<br> 如果未指定此参数, 则 splice() 只删除元素, 不添加元素。|

**返回值**: 返回从 arrayObject 中删除的元素。如果只删除元素, 则返回一个空数组。

```javascript
const arr = [1, 2, 3, 4, 5]

console.log(arr.splice(2, 0, 6, 7)) // []
console.log(arr) // [1, 2, 6, 7, 3, 4, 5]

console.log(arr.splice(2, 2)) // [6, 7]
console.log(arr) // [1, 2, 3, 4, 5]

const arr2 = [1, 2, 3, 4, 5]

console.log(arr2.splice(2, 2, 6, 7)) // [3, 4]
console.log(arr2) // [1, 2, 6, 7, 5]
```

#### toString()

toString() 方法可把数组转换为字符串，并返回结果。

**注意**: 数组中的元素之间用逗号分隔。

**语法**: `array.toString()`

**返回值**: 字符串, 数组的所有值用逗号隔开。

```javascript
const arr = [1, 2, 3, 4, 5]

console.log(arr.toString()) // "1,2,3,4,5"
```

#### unshift()

unshift() 方法可向数组的开头添加一个或多个元素，并返回新的长度。

**注意**: 该方法将改变数组的数目。

**语法**: `array.unshift(item1, ..., itemX)`

**参数说明**:
|参数|描述|
|-|-|
|item1, ..., itemX|可选。向数组起始位置添加一个或多个元素。|

**返回值**: 返回数组的新长度。

```javascript
const arr = [1, 2, 3, 4, 5]

console.log(arr.unshift(0, -1)) // 7
console.log(arr) // [0, -1, 1, 2, 3, 4, 5]
```

#### valueOf()

valueOf() 方法返回 Array 对象的原始值。

该原始值由 Array 对象派生的所有对象继承。

valueOf() 方法通常由 JavaScript 在后台自动调用, 并不显式地出现在代码中。

**注意**: valueOf() 方法不会改变原数组。

**语法**: `array.valueOf()`

**返回值**: 数组的原始值。

```javascript
const arr = [1, 2, 3, 4, 5]

console.log(arr.valueOf()) // [1, 2, 3, 4, 5]
```

#### Array.of()

of() 方法用于将一组值转化为数组, 不考虑参数的数量或类型

Array.of() 和 Array() 构造函数之间的区别在于对单个参数的处理: Array.of(7)创建一个具有单个元素 7 的数组, 而 Array(7)创建一个 length 为 7 的空数组。

如果对象是数组返回 true, 否则返回 false。

**语法**: `Array.of(element0, element1, ...)`

**参数说明**:
|参数|描述|
|-|-|
|element0, element1, ...|可选。0 个或多个元素, 用于填充数组。|

**返回值**: 一个新的数组。

```javascript
console.log(Array.of(7)) // [7]
console.log(Array.of(1, 2, 3)) // [1, 2, 3]
console.log(Array.of('foo')) // ["foo"]
console.log(Array.of()) // []
```

#### Array.at()

at() 方法用于接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。

匹配给定索引的数组中的元素。如果找不到指定的索引，则返回 undefined。

在传递非负数时，at() 方法等价于括号表示法。例如，array[0] 和 array.at(0) 均返回第一个元素。但是，当你需要从数组的末端开始倒数时，则不能使用 Python 和 R 语言中支持的 array[-1]，因为方括号内的所有值都会被视为字符串属性，因此你最终读取的是 array["-1"]，这只是一个普通的字符串属性而不是数组索引。

通常的做法是访问 length 并将其减去从末端开始的相对索引。例如，array[array.length - 1]。at() 方法允许使用相对索引，因此上面的示例可以简化为 array.at(-1)。更正式地，当 index < 0 时，该方法将访问索引 index + array.length。

at() 方法是通用的。其仅期望 this 具有 length 属性和以整数为键的属性。

**语法**: `Array.at(index)`

**参数说明**:
|参数|描述|
|-|-|
|index|必需。整数，要访问的数组元素的索引。当传递负值时,支持从数组末端开始的相对索引; 也就是说, 如果使用负数, 返回的元素将会从数组的末端开始倒数|

**返回值**: 返回数组中指定索引的元素。如果索引超出范围, 则返回 undefined。

```javascript
const arr = [1, 2, 3, 4, 5]

console.log(Array.at(arr, 2)) // 3
console.log(Array.at(arr, -1)) // 5
console.log(Array.at(arr, 10)) // undefined
```

#### Arrat.flat()

flat() 方法方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

flat() 方法返回一个包含将数组与子数组中所有元素的新数组。

flat() 方法会递归地遍历数组，将所有嵌套的数组元素提取出来，生成一个新的一维数组。

**语法**: `Array.flat(depth)`

**参数说明**:
|参数|描述|
|-|-|
|depth|可选。整数，指定要提取嵌套数组的深度。默认值为 1，表示只提取一层嵌套。|

**返回值**: 返回一个新的数组，其中包含将数组与子数组中所有元素的新数组。

```javascript
const arr = [1, 2, [3, 4, [5, 6]], 7, 8]

console.log(arr.flat()) // [1, 2, 3, 4, [5, 6], 7, 8]
console.log(arr.flat(2)) // [1, 2, 3, 4, 5, 6, 7, 8]
```

#### Array.flatMap()

flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为 1 的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。

flatMap() 方法一个新的数组，其中每个元素都是回调函数的结果，并且结构深度 depth 值为 1。

**语法**: `Array.flatMap(callback(currentValue, index, arr), thisValue)`

**参数说明**:
|参数|描述|
|-|-|
|callback(currentValue, index, arr)|必需。函数，数组中的每个元素都会执行这个函数。函数接受三个参数: currentValue, index, arr。currentValue 是数组中正在处理的元素, index 是正在处理的元素的索引, arr 是数组本身。|
|thisValue|可选。对象作为该执行回调时使用, 传递给函数, 用作"this"的值。如果省略了 thisValue, 或者传入 null 或 undefined, 那么回调函数的 this 为全局对象。|

**返回值**: 一个新的数组，其中包含回调函数的结果。

```javascript
const arr = [1, 2, 3, 4, 5]

console.log(arr.flatMap((x) => [x, x * 2])) // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
```
