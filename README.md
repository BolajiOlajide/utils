# @bolajiolajide/utils

<!-- markdownlint-disable MD033 -->
<div align="center">
  <img src="https://github.com/BolajiOlajide/utils/blob/master/alfred.png?raw=true" alt="alfred avatar" width="500px" />
  <p align="center">
</div>

Collection of utility functions/helpers I use in my everyday development.

## Methods

<details>
<summary>capitalize</summary>
This method is used to capitalize a string.

* **value** string to be capitalize

```js
const { capitalize } = require('@bolajiolajide/utils');

const data = capitalize('bolaji');
console.log(data);
// 'Bolaji'
```
</details>

<details>
<summary>convertSliceToString</summary>
This method is used to convert a string slice into a string.

* **value**       string slice to convert
* **separator**   string to use to separate the different items in the slice

```js
const { convertSliceToString } = require('@bolajiolajide/utils');

const data = convertSliceToString('bolaji');
console.log(data);
// 'bolaji'

const data2 = convertSliceToString(['bol', 'aji']);
console.log(data2);
// 'bolaji'

const data3 = convertSliceToString(['bol', 'aji', 'pro', 'ton'], '**');
console.log(data3);
// 'bol**aji**pro**ton'
```
</details>

<!-- markdownlint-disable MD033 -->
<details>
<!-- markdownlint-disable MD033 -->
<summary>countries</summary>
This is a list of countries all over the world. It's a pretty long list.

```js
const { countries } = require('@bolajiolajide/utils');

console.log(countries);
// ['Afghanistan', ...]
```
</details>

<details>
<summary>delay</summary>
This method is used to add a delay to an async method. It takes in one argument which is the amount of milliseconds
to delay.

```js
const { delay } = require('@bolajiolajide/utils');

await delay(10000); // delay for 10seconds
```
</details>

<details>
<summary>generateCSV</summary>
This method is used to generate a csv string from an array of objects. It takes in array of objects with a key-value type of string. The output is a string which will be the records in the array delimited by a comma.

```js
const { generateCSV } = require('@bolajiolajide/utils');

const data = [
  { name: 'John Doe', age: 20 },
  { name: 'Jane Doe', age: 23 }
];
const csv = generateCSV(data);
console.log(csv);
// name, age
// John Doe, 20
// Jane Doe, 23
```
</details>

<details>
<summary>generateShortCode</summary>
This method is used to generate a not so unique shortcode.
The default shortcode length is 5.

```js
const { generateShortCode } = require('@bolajiolajide/utils');

const shortcode = generateShortCode(10);
console.log(shortcode);
// 637010000
```
</details>

<details>
<summary>isDict</summary>
This method returns a boolean depending on whether the argument supplied is a dictionary.

* **value** literal to check type

```js
const { isDict } = require('@bolajiolajide/utils');

const data = isDict('bolaji');
console.log(data);
// false

const data2 = isDict({ amount: 230329 });
console.log(data2);
// true
```
</details>

<details>
<summary>isString</summary>
This method returns a boolean depending on whether the argument supplied is a string.

* **value** literal to check type

```js
const { isString } = require('@bolajiolajide/utils');

const data = isString('bolaji');
console.log(data);
// true

const data2 = isString(230329);
console.log(data2);
// false
```
</details>

<details>
<summary>paginate</summary>
This method is used to lazily paginate an array of items.
It can be used for client-side pagination where no server exists.
It's argumumets are:

* **limit** how many items to receive per page
* **page**  page number to be retrieved
* **data**  the array of data to be paginated

```js
const { paginate } = require('@bolajiolajide/utils');

const data = paginate(2, 2, [
  'Jane',
  'John',
  'James',
  'Bill',
  'Steve',
  'Melissa',
  'Esther',
  'Shannon
]);
console.log(data);
// ['James', 'Bill']
```
</details>

<details>
<summary>sentencize</summary>
This method is used to capitalize several words in a phrase depending on the separator.
It's argumumets are:

* **word**          the word/phrase to sentencize
* **separator**     a string separating the words in a phrase, defaults to ' '

```js
const { sentencize } = require('@bolajiolajide/utils');

const data = sentencize('APPLE_MUSIC', '_');
console.log(data);
// 'Apple Music'

const data = sentencize('SPOTIFY');
console.log(data);
// 'Spotify'
```
</details>
