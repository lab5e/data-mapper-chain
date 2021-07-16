import { DataValue, Mapper, MapperConfig, OutputType } from "./../Typings";

export interface FromJSONConfig {
  propertyString?: string;
}

/**
 * [[include:fromJson-tutorial.md]]
 */
export class FromJSON implements Mapper {
  static id = "FROMJSON";
  static description = "JSON";

  name = "JSON";
  outputType: OutputType = OutputType.string;

  propertyString = "";

  constructor({ propertyString = "" }: FromJSONConfig = {}) {
    this.propertyString = propertyString;
  }

  config(): MapperConfig {
    return {
      id: FromJSON.id,
      params: {
        propertyString: this.propertyString,
      },
    };
  }

  transform(data: DataValue): DataValue {
    if (!data) {
      return data;
    }

    const resString = data.toString();
    let element = {};

    try {
      element = JSON.parse(resString);
    } catch (e) {
      return data;
    }

    const pieces = this.propertyString.split(".");
    let tempEl = { ...element } as any;

    pieces.forEach((piece) => {
      try {
        if (piece === "") {
          return;
        }

        const propValue = tempEl[piece];

        if (propValue) {
          tempEl = tempEl[piece];
        } else {
          tempEl = "";
        }
      } catch {
        return;
      }
    });

    let res = "";
    if (typeof tempEl === "string") {
      res = tempEl;
    } else {
      res = JSON.stringify(tempEl);
    }

    return res;
  }
}
