# Data mapper chain

Simple data mapper library meant to be run in browser to ease data transformation for IoT devices in JS.

## Example: Simple in browser

```html
<body>
  ...
  <script src="https://cdn.jsdelivr.net/npm/@lab5e/data-mapper-chain"></script>
  <script>
    var myMapper = dmc
      .create()
      .chunk({ start: 2, size: 2 })
      .hexToInt();

    console.log(myMapper.mapData("babe")); // Prints 190
  </script>
</body>
```

## Example: In ts

You must first install the dependency

```bash
npm i @lab5e/data-mapper-chain
```

### Using shorthand

```ts
import { DataMapperChain } from "@lab5e/data-mapper-chain";

// Create a chain and add mappers
const dataMapperChain = new DataMapperChain()
  .chunk({
    start: 50,
    size: 4,
  })
  .hexToInt();

// Raw data from device
const deviceData: string = `47eee3803e3a8c713f8daf7242fc6666423c28c04111d84000024b00a3030c261b010b91d3`;

// Run mapper
dataMapperChain.mapData(deviceData); // prints 587
```

### Instanciating mappers directly

```ts
import { DataMapperChain, Mappers } from "@lab5e/data-mapper-chain";

/**
 * We know that on byte 25 there is 2 bytes of data which is a hex encoded uint16
 * We solve this by doing the following:
 */

/**
 * Create a Chunk mapper
 */
const chunk = Mappers.chunk({
  start: 50,
  size: 4,
});

/**
 * Create a HexToInt mapper
 */
const hexToInt = Mappers.hexToInt();

// Create a DataMapperChain
const dataMapperChain = new DataMapperChain();

// Add mappers
dataMapperChain.addMapper(chunk);
dataMapperChain.addMapper(hexToInt);

// Raw data from device
const deviceData: string = `47eee3803e3a8c713f8daf7242fc6666423c28c04111d84000024b00a3030c261b010b91d3`;

// Run mapper
dataMapperChain.mapData(deviceData); // prints 587
```

## Available mappers

All mappers have fully optional configurations, meaning if no configuration is provided it will fallback to sane defaults. It also supports partly providing parameters if you want to just override one option of the mapper.

### Base64

Supports encoding and decoding of base64 input.

### Chunk

Take a chunk of the input and return it.

### FromJSON

Traverse a JSON struct and return value.

### HexToFloat

Take a hex input and convert it to a float.

### HexToInt

Take a hex input and convert it to an int.

### Offset

Take an input and offset it by a positive or negative value.
