// Run tiktok-ad-library-scraper on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "searchTerms": [
    "zalando"
  ],
  "country": "DE",
  "daysBack": 365,
  "maxItemsPerSearch": 30,
  "maxItems": 500
};
const run = await client.actor('kamerozkan/tiktok-ad-library-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
