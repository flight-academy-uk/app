/// <reference path="./.sst/platform/config.d.ts" />

import { readdirSync } from "fs";

export default $config({
  app(input) {
    return {
      name: "flight-academy",
      providers: {
        aws: {
          profile:
            input.stage === "production"
              ? "flight-academy-production"
              : "flight-academy-dev",
          region: "eu-west-2",
        },
      },
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const outputs = {};
    for (const resource of readdirSync("./infra/")) {
      const result = await import("./infra/" + resource);
      if (result.outputs) Object.assign(outputs, result.outputs);
    }
    return outputs;
  },
});
