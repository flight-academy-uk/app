/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "flight-academy",
      providers: {
        aws: {
          profile: input.stage === "production" ? "flight-academy-production" : "flight-academy-dev"
        }
      },
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const api = await import("./infra/api");

    return {
      api: api.myApi.url,
    };
  },
});
