#!/usr/bin/env bash
# Run tiktok-ad-library-scraper synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~tiktok-ad-library-scraper/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"searchTerms": ["zalando"], "country": "DE", "daysBack": 365, "maxItemsPerSearch": 30, "maxItems": 500}'
