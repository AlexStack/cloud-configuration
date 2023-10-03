import { fetchAllConfigs } from "../cloud-config";

console.log(
  "test-config.ts",
  fetchAllConfigs({
    orgId: "U2FsdGVkX1/1dETBp2nec8Xe2KtA/V8ndJo/uDqXrpc=",
  })
);
