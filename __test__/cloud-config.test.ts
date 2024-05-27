import { mockApiData } from './mock-api-data';
import cloudConfig, { CloudConfigData } from '../src/index';

let cloudConfigData: CloudConfigData[] = [];

const decryptSecret = 'CLIENT_/lMAHJcive';

describe('fetchAllConfigs', () => {
  it('should fetch configs successfully', async () => {
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(mockApiData),
    };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);
    global.fetch = mockFetch;

    cloudConfigData = await cloudConfig.fetchAll({
      decryptSecret,
    });

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(Object)
    );
    expect(mockResponse.json).toHaveBeenCalledTimes(1);
    expect(cloudConfigData[2].featureKey).toEqual(mockApiData[2].featureKey);
  });

  it('should throw an error when response is not ok', async () => {
    const mockResponse = { ok: false, status: 404, statusText: 'Not Found' };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);
    global.fetch = mockFetch;

    const result = await cloudConfig.fetchAll();
    expect(result.length).toEqual(0);
  });

  it('should catch and log errors', async () => {
    const mockError = new Error('Test error');
    const mockFetch = jest.fn().mockRejectedValue(mockError);
    global.fetch = mockFetch;

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    const result = await cloudConfig.fetchAll();

    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(
      '💔💔💔 fetchAllConfigs error:',
      mockError
    );
    expect(result).toEqual([]);
  });
});

describe('getConfigWithDefaultValue', () => {
  it('should return the correct cloud config value', () => {
    const boolean_2 = cloudConfig.getWithDefault({
      configs: cloudConfigData,
      featureKey: 'boolean_2',
      defaultValue: true,
    });
    expect(boolean_2).toEqual(false);

    const key_not_exists = cloudConfig.getWithDefault({
      configs: cloudConfigData,
      featureKey: 'key_not_exists',
      defaultValue: 'default_value_if_key_not_exists',
    });
    expect(key_not_exists).toEqual('default_value_if_key_not_exists');

    const encrypt_array_001 = cloudConfig.getWithDefault({
      configs: cloudConfigData,
      projectName: 'project001',
      groupName: 'group001',
      featureKey: 'encrypt_key_001',
      defaultValue: ['encrypt_key_001_value', 'value2'],
    });
    expect(encrypt_array_001).toEqual([
      'a1',
      'a2',
      's3',
      's a7',
      'hamilton east',
    ]);

    const encrypt_json_001 = cloudConfig.getWithDefault({
      configs: cloudConfigData,
      featureKey: 'json_key_1',
      defaultValue: { message: 'json message' },
    });
    expect(encrypt_json_001.message).toEqual('I am JSON');

    const not_enabled_key = cloudConfig.get({
      configs: cloudConfigData,
      featureKey: 'float_key_1',
    });
    expect(not_enabled_key).toEqual(null);
  });
});
