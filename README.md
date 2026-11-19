# TikTok Ad Library Scraper - Commercial Content Library EU

TikTok ads library scraper and API for competitor ads: search the official TikTok Ad Library (Commercial Content Library) for the EU, EEA, Switzerland and UK by advertiser name or keyword and country, with first and last shown dates, unique users seen, video and cover links. No login.

**[Run it on Apify Store](https://apify.com/kamerozkan/tiktok-ad-library-scraper)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/tiktok-ad-library-scraper); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/tiktok-ad-library-scraper).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/tiktok-ad-library-scraper) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "searchTerms": [
    "zalando"
  ],
  "country": "DE",
  "daysBack": 365,
  "maxItemsPerSearch": 30,
  "maxItems": 500
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Use in n8n & Make

- **n8n:** Import [integrations/n8n-workflow.json](integrations/n8n-workflow.json) directly into your n8n workspace, set your `APIFY_TOKEN` environment variable (or Bearer token header), and click **Execute Workflow**.
- **Make / Zapier:** Call the Apify **Run an Actor** module with Actor ID `kamerozkan/tiktok-ad-library-scraper` and the JSON input above, or POST to `https://api.apify.com/v2/acts/kamerozkan~tiktok-ad-library-scraper/run-sync-get-dataset-items`.

## Use with AI Agents (Apify MCP)

This Actor works with Claude Desktop, Cursor, Windsurf and any MCP-compatible AI agent through the official [Apify MCP Server](https://mcp.apify.com). Copy [integrations/mcp-config.json](integrations/mcp-config.json) into your MCP client configuration and replace `YOUR_APIFY_TOKEN` with your token.

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "adId": "1881132460810290",
    "adUrl": "https://library.tiktok.com/ads/detail/?ad_id=1881132460810290",
    "advertiserName": "Zalando SE",
    "adTitle": "Shoppe jetzt bei Zalando",
    "category": null,
    "firstShown": "2026-11-06",
    "lastShown": "2026-11-06",
    "daysShown": 1,
    "uniqueUsersSeen": "0-1K",
    "format": null,
    "videoUrl": null,
    "coverImageUrl": null,
    "imageUrls": [],
    "videoCount": 0,
    "searchTerm": "zalando",
    "country": "DE",
    "totalAdsForSearch": 2305,
    "scrapedAt": "2026-11-07T06:09:34+00:00"
  }
]
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/tiktok-ad-library-scraper/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
