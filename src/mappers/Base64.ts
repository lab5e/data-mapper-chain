import * as base64js from "base64-js";
import { Base64Action, Base64DecodeAs } from "../Config";
import { DataValue, Mapper, MapperConfig, OutputType } from "./../Typings";

export interface Base64Config {
  action?: Base64Action;
  decodeAs?: Base64DecodeAs;
}

/**
 * [[include:base64-tutorial.md]]
 */
export class Base64 implements Mapper {
  static id = "BASE64";
  static description = "Base64";

  name = "Base64";
  outputType: OutputType = OutputType.string;

  action: Base64Action = Base64Action.DECODE;
  decodeAs: Base64DecodeAs = Base64DecodeAs.STRING;

  constructor({
    action = Base64Action.DECODE,
    decodeAs = Base64DecodeAs.STRING,
  }: Base64Config = {}) {
    this.action = action;
    this.decodeAs = decodeAs;
  }

  config(): MapperConfig {
    return {
      id: Base64.id,
      params: {
        action: this.action,
        decodeAs: this.decodeAs,
      },
    };
  }

  transform(data: DataValue): DataValue {
    if (!data) {
      return data;
    }

    let resString: string = data as string;

    if (this.action === Base64Action.DECODE) {
      try {
        const uintArr = base64js.toByteArray(data as string);

        if (this.decodeAs === Base64DecodeAs.STRING) {
          return String.fromCharCode.apply(null, uintArr as any);
        } else if (this.decodeAs === Base64DecodeAs.HEXSTRING) {
          return Array.from(uintArr, (byte: number) => {
            return ("0" + (byte & 0xff).toString(16)).slice(-2);
          }).join("");
        }
      } catch (e) {
        return resString;
      }
    }

    if (this.action === Base64Action.ENCODE) {
      try {
        resString = window.btoa(resString);
      } catch (e) {
        return resString;
      }
    }

    return resString;
  }
}
