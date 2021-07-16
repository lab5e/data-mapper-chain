export type DataValue = string | number;
export enum OutputType {
  "string",
  "number",
  "array",
}

export interface MapperConfig {
  id: string;
  /** @deprecated */
  ident?: string;
  params: Record<string, unknown>;
}

export interface Mapper {
  outputType: OutputType;
  transform(data: DataValue): DataValue;
  config(): MapperConfig;
}

export interface MapperType {
  id: string;
  value: string;
  entity: { new (params: Record<string, unknown>): Mapper };
}
