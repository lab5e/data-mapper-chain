export type IDataValue = string | number;
export enum IOutputType {
  "string",
  "number",
  "array",
}

export interface MapperConfig {
  id: string;
  /** @deprecated */
  ident?: string;
  params: string | Record<string, unknown>;
}

export interface Mapper {
  outputType: IOutputType;
  transform(data: IDataValue): IDataValue;
  config(): MapperConfig;
}

export interface MapperType {
  id: string;
  value: string;
  entity: { new (params: string | Record<string, unknown>): Mapper };
}
