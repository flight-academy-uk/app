import { Handler } from "aws-lambda";
import { Example } from "@flight-academy/core/example";

export const handler: Handler = async (_event) => {
  return {
    statusCode: 200,
    body: `"${Example.hello()}"`,
  };
};
