import { BazaarvoiceDataSource } from '../../../fsbazaarvoice/dist';
import BBPlatformDataSource from './BBPlatformDataSource';
import { CommerceCloudDataSource } from '../../../fssalesforce/dist';
import FSNetwork from '../../../fsnetwork/dist';
import { commerceCloudMiddleware } from './commerceCloudMiddleware';
import { ShopifyDataSource } from '../../../fsshopify/dist';
import { env } from '../../../fsapp/dist';
import { MockCommerceDataSource, MockReviewDataSource } from '../../../fsmockdatasources/dist';

// tslint:disable-next-line:whitespace
type CommerceDataSource = import('../../../fscommerce/dist').CommerceDataSource;
// tslint:disable-next-line:whitespace
type ReviewDataSource = import('../../../fscommerce/dist').ReviewDataSource;

const { dataSourceConfigs } = env;

let dataSourceToExport: CommerceDataSource;
let reviewDataSource: ReviewDataSource = new BazaarvoiceDataSource(dataSourceConfigs.bazaarVoice);

export interface DataSourceConfig {
  type: 'bbplatform' | 'commercecloud' | 'shopify' | 'mock';
  categoryFormat: 'grid' | 'list';
  apiConfig: any;
}

if (env.dataSource.type === 'bbplatform') {
  dataSourceToExport = new BBPlatformDataSource(env.dataSource.apiConfig.apiHost);
} else if (env.dataSource.type === 'commercecloud') {
  const config: any = env.dataSource.apiConfig;
  config.middleware = commerceCloudMiddleware;

  if (config.networkClient) {
    config.networkClient = new FSNetwork(config.networkClient);
  }

  dataSourceToExport = new CommerceCloudDataSource(config);
} else if (env.dataSource.type === 'shopify') {
  const config: any = env.dataSource.apiConfig;
  dataSourceToExport = new ShopifyDataSource(config);
} else if (env.dataSource.type === 'mock') {
  dataSourceToExport = new MockCommerceDataSource();
  reviewDataSource = new MockReviewDataSource();
} else {
  throw new Error('No data source specified in env!');
}

export const dataSource = dataSourceToExport;
export const dataSourceConfig: DataSourceConfig = env.dataSource;

export { reviewDataSource };
