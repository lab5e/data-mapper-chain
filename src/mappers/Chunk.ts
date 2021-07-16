import { IDataValue, Mapper, MapperConfig, IOutputType } from "./../Typings";

export interface ChunkConfig {
  // Start-index of chunk
  start?: string | number;
  // Size of chunk as char-length
  size?: string | number;
}

/**
 * [[include:chunk-tutorial.md]]
 */
export class Chunk implements Mapper {
  static id = "CHUNK";
  static description = "Chunk";

  name = "Chunk";
  outputType: IOutputType = IOutputType.string;

  start = 0;
  size = 4;

  constructor({ start = "0", size = "4" }: ChunkConfig = {}) {
    this.start = parseInt(start.toString(), 10);
    this.size = parseInt(size.toString(), 10);
  }

  config(): MapperConfig {
    return {
      id: Chunk.id,
      params: {
        start: this.start,
        size: this.size,
      },
    };
  }

  transform(data: IDataValue): IDataValue {
    return data.toString().substring(this.start, this.start + this.size);
  }
}
