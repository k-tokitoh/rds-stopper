import type { AWS } from "@serverless/typescript";

import { main } from "./src/functions";

const serverlessConfiguration: AWS = {
  service: "rds-stopper",
  frameworkVersion: "2",
  custom: {
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },
  },
  plugins: ["serverless-webpack"],
  provider: {
    name: "aws",
    profile: "personal",
    region: "ap-northeast-1",
    runtime: "nodejs12.x",
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
    },
    lambdaHashingVersion: "20201221",
  },
  functions: { main },
};

module.exports = serverlessConfiguration;
