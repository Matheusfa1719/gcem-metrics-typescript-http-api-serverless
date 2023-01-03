import * as AWS from "aws-sdk";
import { createNewError } from "../../../lib";

const dynamoDB = new AWS.DynamoDB();
const userTable = process.env.USERS_TABLE as string;

export const putItem = async (item: AWS.DynamoDB.AttributeMap) => {
  const params: AWS.DynamoDB.Types.PutItemInput = {
    TableName: userTable,
    Item: item,
  };

  try {
    await dynamoDB.putItem(params).promise();
  } catch (error) {
    console.log(error);
    throw createNewError(400, "Erro ao criar usuário");
  }
};

export const checkUserExist = async (email: string) => {
  try {
    const params: AWS.DynamoDB.Types.QueryInput = {
      TableName: userTable,
      IndexName: "email-index",
      KeyConditionExpression: "email = :val",
      ExpressionAttributeValues: {
        ":val": { S: email },
      },
    };
    const { Items } = await dynamoDB.query(params).promise();
    return Items && Items.length > 0 ? true : false;
  } catch (err) {
    console.log(err);
    throw createNewError(400, "Erro ao validar se usuário existe");
  }
};

export const findUserByEmail = async (email: string) => {
  const params: AWS.DynamoDB.Types.QueryInput = {
    TableName: userTable,
    IndexName: "email-index",
    KeyConditionExpression: "email = :val",
    ExpressionAttributeValues: {
      ":val": { S: email },
    },
  };
  const { Items } = await dynamoDB.query(params).promise();
  return Items && Items.length > 0 ? Items[0] : null;
};

export const findUserById = async (userId: string) => {
  const params: AWS.DynamoDB.GetItemInput = {
    TableName: userTable,
    Key: { userId: { S: userId } },
  }
  const { Item } = await dynamoDB.getItem(params).promise();
  return Item;
}