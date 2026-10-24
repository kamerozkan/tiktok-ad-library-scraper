"""Run tiktok-ad-library-scraper on Apify and print the results. pip install apify-client"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run_input = {'searchTerms': ['zalando'],
 'country': 'DE',
 'daysBack': 365,
 'maxItemsPerSearch': 30,
 'maxItems': 500}
run = client.actor("kamerozkan/tiktok-ad-library-scraper").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
