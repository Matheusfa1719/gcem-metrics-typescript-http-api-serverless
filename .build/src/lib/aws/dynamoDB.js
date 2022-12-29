"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putItem = void 0;
const AWS = __importStar(require("aws-sdk"));
const models_1 = require("../../models");
const dynamoDB = new AWS.DynamoDB();
const errorFactoryService = new models_1.ErrorFactoryService();
const putItem = async (tableName, item) => {
    const params = {
        TableName: tableName,
        Item: item
    };
    try {
        await dynamoDB.putItem(params).promise();
    }
    catch (error) {
        console.log(error);
        throw errorFactoryService.createNewError(500, 'Server Error');
    }
};
exports.putItem = putItem;
//# sourceMappingURL=dynamoDB.js.map