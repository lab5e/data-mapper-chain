import { DataValue, Mapper, MapperConfig, OutputType } from "./../Typings";

export interface OffsetConfig {
  offset?: number | string;
}

/**
 * [[include:offset-tutorial.md]]
 */
export class Offset implements Mapper {
  static id = "OFFSET";
  static description = "Offset number";

  name = "Offset";
  outputType: OutputType = OutputType.number;

  offset = 0;

  constructor({ offset = "0" }: OffsetConfig = {}) {
    this.offset = parseInt(offset.toString(), 10);
  }

  config(): MapperConfig {
    return {
      id: Offset.id,
      params: {
        offset: this.offset,
      },
    };
  }

  transform(data: DataValue): DataValue {
    let parsedNumber: number;

    if (typeof data !== "number") {
      parsedNumber = parseInt(data, 10);
    } else {
      parsedNumber = data;
    }

    if (Number.isNaN(parsedNumber) || typeof this.offset !== "number") {
      return 0;
    }

    return parsedNumber + this.offset;
  }
}
