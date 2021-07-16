export { Base64Config as IBase64Config } from "./mappers/Base64";
export { ChunkConfig as IChunkConfig } from "./mappers/Chunk";
export { FromJSONConfig as IFromJSONConfig } from "./mappers/FromJSON";
export { HexToFloatConfig as IHexToFloatConfig } from "./mappers/HexToFloat";
export { HexToIntConfig as IHexToIntConfig } from "./mappers/HexToInt";
export { OffsetConfig as IOffsetConfig } from "./mappers/Offset";

/**
 * Endianness used as config parameter
 */
export enum Endianness {
  /**
   * Config parameter for defining little endianness
   */
  LITTLE_ENDIAN = "le",
  /**
   * Config parameter for defining big endianness
   */
  BIG_ENDIAN = "be",
}

/**
 * Base64Action used as config parameter
 */
export enum Base64Action {
  /**
   * Config parameter for defining encoding in Base64
   */
  ENCODE = "encode",
  /**
   * Config parameter for defining decoding in Base64
   */
  DECODE = "decode",
}

/**
 * Base64DecodeAs used as config parameter
 */
export enum Base64DecodeAs {
  /**
   * Config parameter for defining decoding as string
   */
  STRING = "string",
  /**
   * Config parameter for defining decoding as hex string
   */
  HEXSTRING = "hexstring",
}

export const Config = {
  Base64Action,
  Base64DecodeAs,
  Endianness,
};
