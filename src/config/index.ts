import { SecretsManager } from "aws-sdk";

const secretsManager = new SecretsManager();

async function getSecret(secretName: string) {
  const result = await secretsManager
    .getSecretValue({ SecretId: secretName })
    .promise();
  return result.SecretString;
}

export const getConfigs = async () => {
  return {
    secretJWT: process.env.JWT_SECRET || await getSecret("jwt-secret-gcem-app"),
  };
};
