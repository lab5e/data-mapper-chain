import { Base64, Base64Config } from "./mappers/Base64";
import { Chunk, ChunkConfig } from "./mappers/Chunk";
import { FromJSON, FromJSONConfig } from "./mappers/FromJSON";
import { HexToFloat, HexToFloatConfig } from "./mappers/HexToFloat";
import { HexToInt, HexToIntConfig } from "./mappers/HexToInt";
import { OffsetConfig, Offset } from "./mappers/Offset";

import { MapperType } from "./Typings";

export const Mappers = {
  Base64,
  Chunk,
  FromJSON,
  HexToFloat,
  HexToInt,
  Offset,
  base64: (params: Base64Config = {}): Base64 => new Base64(params),
  chunk: (params: ChunkConfig = {}): Chunk => new Chunk(params),
  fromJson: (params: FromJSONConfig = {}): FromJSON => new FromJSON(params),
  hexToFloat: (params: HexToFloatConfig = {}): HexToFloat => new HexToFloat(params),
  hexToInt: (params: HexToIntConfig = {}): HexToInt => new HexToInt(params),
  offset: (params: OffsetConfig = {}): Offset => new Offset(params),
};

export const AVAILABLE_MAPPERS_TYPES: MapperType[] = [
  {
    id: Chunk.id,
    value: Chunk.description,
    entity: Chunk,
  },
  {
    id: HexToFloat.id,
    value: HexToFloat.description,
    entity: HexToFloat,
  },
  {
    id: HexToInt.id,
    value: HexToInt.description,
    entity: HexToInt,
  },
  {
    id: Offset.id,
    value: Offset.description,
    entity: Offset,
  },
  {
    id: Base64.id,
    value: Base64.description,
    entity: Base64,
  },
  {
    id: FromJSON.id,
    value: FromJSON.description,
    entity: FromJSON,
  },
];
