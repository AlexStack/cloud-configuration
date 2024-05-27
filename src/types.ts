export interface CloudConfigData {
  projectName: string;
  groupName: string;
  featureKey: string;
  value: unknown;
  valueType: string;
  prodEnabled?: boolean;
  devEnabled?: boolean;
  valueEncrypted?: boolean;
}

export interface FetchAllConfigsParams {
  orgId?: string;
  serverSide?: boolean;
  accessToken?: string;
  cache?: RequestCache;
  apiPrefix?: string;
  cacheSeconds?: number;
  decryptSecret?: string;
}
