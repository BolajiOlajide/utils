# @BolajiOlajide/alfred

<!-- markdownlint-disable MD033 -->
<div align="center">
  <img src="https://github.com/BolajiOlajide/alfred/blob/master/alfred.png?raw=true" alt="alfred avatar" width="500px" />
</div>

Collection of utility functions/helpers I use in my everyday development.

## Methods

<!-- markdownlint-disable MD033 -->
<details>
<!-- markdownlint-disable MD033 -->
<summary>countries</summary>
This is a list of countries all over the world. It's a pretty long list.

```js
const { countries } = require('@BolajiOlajide/alfred');

console.log(countries);
// ['Afghanistan', ...]
```

</details>

<details>
<summary>generateCSV</summary>
This method is used to generate a csv string from an array of objects. It takes in array of objects with a key-value type of string. The output is a string which will be the records in the array delimited by a comma.

```js
const { generateCSV } = require('@BolajiOlajide/alfred');

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
const { generateShortCode } = require('@BolajiOlajide/alfred');

const shortcode = generateShortCode(10);
console.log(shortcode);
// 637010000
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
const { paginate } = require('@BolajiOlajide/alfred');

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
