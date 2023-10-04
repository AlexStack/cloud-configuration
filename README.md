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
import { fetchAllConfigs, getCloudConfig } from "cloud-configuration";

const configs = await fetchAllConfigs();

const auFlagUrl = getCloudConfig({ configs, featureKey: "au_flag_url" });
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
