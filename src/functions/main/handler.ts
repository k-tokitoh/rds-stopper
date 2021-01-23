import "source-map-support/register";
import { Handler } from "aws-lambda";
import { middyfy } from "@libs/lambda";

const handler: Handler = async () => {
  console.log("executing.");
};

export const main = middyfy(handler);
