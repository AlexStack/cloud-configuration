# Cloud Config

Manage your cloud configuration with ease.

## Installation

```bash
npm install cloud-configuration
```

or

```bash
yarn add cloud-configuration
```

## Basic Usage

```typescript
import cloudConfig from 'cloud-configuration';

const configs = await cloudConfig.fetchAll();

const auFlagUrl = cloudConfig.get({ configs, featureKey: 'au_flag_url' }); // return value or null

const usFlagUrl = cloudConfig.getWithDefault({
  configs,
  featureKey: 'us_flag_url',
  defaultValue: 'https://example.com/us.png',
}); // return typed value or default value, good for typescript
```

## Local .env examples

```bash
CLOUD_CONFIG_SERVER_ENCRYPT_SECRET=S_+2/QGV3Xz
CLOUD_CONFIG_SERVER_ACCESS_TOKEN=PRIVATE_U2FsdGVkX1/V6tnPtjtXIy9pX9oVKt1M73fasTvAsFpaQtvZg==
NEXT_PUBLIC_CLOUD_CONFIG_CLIENT_ENCRYPT_SECRET=C_/uTPZ+2Qrr
NEXT_PUBLIC_CLOUD_CONFIG_ORG_ID=U2FsdGVkX1/1dETBp2nedJo/uDqXrpc=
```

## Whole package size

- package size: < 10 kB

## License

MIT
