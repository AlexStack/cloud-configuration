import { FetchAllConfigsParams } from './types';

export const CLOUD_CONFIG_DEFAULT_GROUP = 'defaultGroup';
export const CLOUD_CONFIG_DEFAULT_PROJECT = 'defaultProject';

export const IS_PROD = process.env.NODE_ENV === 'production';

export const CLOUD_CONFIG_API_ENDPOINT =
  process.env.NEXT_PUBLIC_CLOUD_CONFIG_API_ENDPOINT ||
  'http://localhost:3001/api';

export const CLOUD_CONFIG_ORG_ID =
  process.env.NEXT_PUBLIC_CLOUD_CONFIG_ORG_ID ||
  'Missing NEXT_PUBLIC_CLOUD_CONFIG_ORG_ID in .env';

export const CLOUD_CONFIG_CLIENT_ENCRYPT_SECRET =
  process.env.NEXT_PUBLIC_CLOUD_CONFIG_CLIENT_ENCRYPT_SECRET;

export const CLOUD_CONFIG_SERVER_ENCRYPT_SECRET =
  process.env.CLOUD_CONFIG_SERVER_ENCRYPT_SECRET;

export const CLOUD_CONFIG_FETCH_ALL_DEFAULT_VALUE: FetchAllConfigsParams = {
  orgId: CLOUD_CONFIG_ORG_ID,
  serverSide: false,
  accessToken: undefined,
  cache: 'default',
  apiPrefix: CLOUD_CONFIG_API_ENDPOINT,
  // cacheSeconds: 60,
};
