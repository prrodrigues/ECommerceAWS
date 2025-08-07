import * as lambda from 'aws-cdk-lib/aws-lambda'  
import * as lambdaNodeJs from 'aws-cdk-lib/aws-lambda-nodejs'
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class ProductsAppStack extends cdk.Stack {
    readonly productsFetchHandler: lambdaNodeJs.NodejsFunction


    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.productsFetchHandler = new lambdaNodeJs.NodejsFunction(this, 'ProductsFetchFunction', {
            functionName: 'ProductsFetchFunction',
            runtime: lambda.Runtime.NODEJS_22_X,
            entry: 'lambda/products/ProductsFetchFunction.ts',
            handler: 'handler', 
            memorySize: 512, 
            timeout: cdk.Duration.seconds(5), 
            bundling: {
                minify: true, 
                sourceMap: false,
            }
        });
        
    }
}