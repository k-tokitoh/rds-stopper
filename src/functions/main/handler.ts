import "source-map-support/register";
import { Handler } from "aws-lambda";
import { middyfy } from "@libs/lambda";
import * as RDS from "aws-sdk/clients/rds";

const handler: Handler = async () => {
  const rds = new RDS();
  await rds
    .stopDBInstance({ DBInstanceIdentifier: "test" })
    .promise()
    .catch((err) => console.error(err));
};

export const main = middyfy(handler);
