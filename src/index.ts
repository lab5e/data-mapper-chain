import { DataMapperChain, DataMapperChainConfig } from "./DataMapperChain";

export * from "./DataMapperChain";
export * from "./Config";
export * from "./Mappers";
export * from "./Typings";

/**
 * Create a new instance of a DataMapperChain.
 * @param newDataMapperChainParams DataMapperChain configuration object
 */
export const create = (newDataMapperChainParams: DataMapperChainConfig = {}): DataMapperChain => {
  return new DataMapperChain(newDataMapperChainParams);
};
