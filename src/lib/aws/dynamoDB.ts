import * as AWS from 'aws-sdk';
import { ErrorFactoryService } from '../../models';

const dynamoDB = new AWS.DynamoDB();
const errorFactoryService = new ErrorFactoryService();

export const putItem = async (tableName: string, item: AWS.DynamoDB.AttributeMap) => {
  const params: AWS.DynamoDB.Types.PutItemInput = {
    TableName: tableName,
    Item: item
  };

  try {
    await dynamoDB.putItem(params).promise();
  } catch (error) {
    console.log(error)
    throw errorFactoryService.createNewError(500, 'Server Error');
  }
}

export const findUserByEmailBool = async (tableName: string, email: string) => {
  const params: AWS.DynamoDB.Types.QueryInput = {
    TableName: tableName,
    IndexName: 'email-index',
    KeyConditionExpression: 'email = :val',
    ExpressionAttributeValues: {
      ':val': { S: email }
    }
  }
  const { Items } = await dynamoDB.query(params).promise();
  return Items && Items.length > 0 ? true : false
}

export const findUserByEmail = async (tableName: string, email: string) => {
  const params: AWS.DynamoDB.Types.QueryInput = {
    TableName: tableName,
    IndexName: 'email-index',
    KeyConditionExpression: 'email = :val',
    ExpressionAttributeValues: {
      ':val': { S: email }
    }
  }
  const { Items } = await dynamoDB.query(params).promise();
  return Items && Items.length > 0 ? Items[0] : null
}