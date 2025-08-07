#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ECommerceApiStack } from '../lib/ecommerceApi-stack';
import { ProductsAppStack } from '../lib/productsApp-stack';

const app = new cdk.App();

const env = {
  account: "701632502754", 
  region: "us-east-1"
};

const tags = {
  cost: 'ECommerce',
  team: "SiecolaCode001"
};

const productionStack = new ProductsAppStack(app, 'ProductsApp', {
  env: env,
  tags: tags,
});

const eCommerceApiStack = new ECommerceApiStack(app, 'ECommerceApi', {
  env: env,
  tags: tags,
  productsFetchHandler: productionStack.productsFetchHandler
});

