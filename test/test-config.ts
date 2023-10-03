import { fetchCloudConfig } from "../cloud-config";

console.log(
  "test-config.ts",
  fetchCloudConfig({
    orgId: "U2FsdGVkX1/1dETBp2nec8Xe2KtA/V8ndJo/uDqXrpc=",
  })
);
