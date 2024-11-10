import { domain } from "./dns";

export const www = new sst.aws.Astro("Site", {
    domain: {
        domainName: domain
    },
    path: "./packages/www",
});

export const outputs = {
    www: www.url
};