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

const configs = await fetchAllConfigs({
  orgId: "U2FsdGVkX1/1dETBp2nec8Xe2KtA/V8ndJo/uDqXrpc=",
});

const auFlagUrl = getCloudConfig({ configs, featureKey: "au_flag_url" });
```

## License

MIT
