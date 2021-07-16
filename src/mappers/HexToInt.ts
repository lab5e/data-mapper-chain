import { Endianness } from "../Config";
import { DataValue, Mapper, MapperConfig, OutputType } from "./../Typings";

export interface HexToIntConfig {
  endianness?: Endianness;
  signed?: boolean;
}

/**
 * [[include:hexToInt-tutorial.md]]
 */
export class HexToInt implements Mapper {
  static id = "HEXTOINT";
  static description = "Hex to int";

  name = "Hex to int";
  outputType: OutputType = OutputType.number;

  endianness: Endianness = Endianness.BIG_ENDIAN;
  signed = false;
  hexRegExp = new RegExp(/^[a-fxA-F0-9_]+$/);

  constructor({ endianness = Endianness.BIG_ENDIAN, signed = false }: HexToIntConfig = {}) {
    this.endianness = endianness;
    this.signed = signed;
  }

  config(): MapperConfig {
    return {
      id: HexToInt.id,
      params: {
        endianness: this.endianness,
        signed: this.signed,
      },
    };
  }

  transform(data: DataValue): DataValue {
    if (!data) {
      return 0;
    }

    let resString: string = data.toString();

    if (!this.hexRegExp.test(resString)) {
      return 0;
    }

    if (this.endianness === Endianness.LITTLE_ENDIAN) {
      if (resString.includes("0x")) {
        resString = resString.slice(2);
      }

      if (resString.length > 1) {
        const resStringGrouped = resString.match(/(..)/g);
        if (resStringGrouped) {
          resString = resStringGrouped.reverse().join("");
        }
      }
    }

    if (!resString.includes("0x")) {
      resString = "0x" + resString;
    }

    let resValue: number = parseInt(resString, 16);

    if (this.signed) {
      if (resValue >= parseInt("0x8" + "0".repeat(resString.length - 3), 16)) {
        resValue = resValue - parseInt("0x1" + "0".repeat(resString.length - 2), 16);
      }
    }

    return resValue;
  }
}
