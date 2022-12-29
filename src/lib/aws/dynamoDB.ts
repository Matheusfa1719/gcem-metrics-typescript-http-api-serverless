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