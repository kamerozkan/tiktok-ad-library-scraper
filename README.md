# TikTok Ad Library Scraper - Commercial Content Library EU

Scrape the official TikTok Ad Library (Commercial Content Library) for the EU, EEA, Switzerland and UK: search ads by advertiser name or keyword and country, with first and last shown dates, unique users seen, video and cover links. No login.

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

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "adId": "1876511906240658",
    "adUrl": "https://library.tiktok.com/ads/detail/?ad_id=1876511906240658",
    "advertiserName": "HIP WO TEA HONG (HONG KONG) LIMITED",
    "adTitle": "Retro running shoes with lightweight deconstructed design",
    "category": "Apparel & Accessories",
    "firstShown": "2026-09-16",
    "lastShown": "2026-09-16",
    "daysShown": 1,
    "uniqueUsersSeen": "0-1K",
    "format": "video",
    "videoUrl": "https://library.tiktok.com/api/v1/cdn/1792831890/video/aHR0cHM6Ly92NzcudGlrdG9rY2RuLmNvbS9mODMwYmI5Zjc4OGM2OWMzMzE1YTQ1YWE4M2RiMTNlMy82YWRjYzVmYy92aWRlby90b3MvYWxpc2cvdG9zLWFsaXNnLXZlLTAwNTFjMDAxLXNnL29NUVVQVjY0SThuT0FMaVY1V2dnZUFENHhMUFZDTUd4R1FlZWI1Lw==/12d74514-95be-4ab1-b838-10736cc5a737?a=475769&bt=256&btag=e000b0000&bti=PDU2NmYwMy86&ft=.NpOcInz7Th-DldGXq8Zmo&l=20261024165129B69541B90174DC97D5EC&mime_type=video_mp4&rc=Zjw2ZDk8Ojs6aTs1MzhoZ0BpamtkO3E5cnY6ZDMzODYzNEAtYTVjYzVjXzAxL2MxYTMyYSNkZXBqMmRzNGlhLS1kMDFzcw%3D%3D&signature=4ChUkuOmvmrpdqs2SnpYMybD9cvnKBGwACG62omEcug%3D&vvpl=1",
    "coverImageUrl": "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0051c001-sg/oUd4eCHmq1BhD8IUB4FEgHDlDqANciNQI8fcQn~tplv-tiktokx-origin.jpeg?dr=14582&refresh_token=2cb57d08&x-expires=1792850400&x-signature=DO%2FPAbTUc%2Fwa1FIyPo%2FsOb712L0%3D&t=4d5b0474&ps=13740610&shp=0c75dd76&shcp=9b759fb9&idc=sg1",
    "imageUrls": [
      "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0051c001-sg/oUd4eCHmq1BhD8IUB4FEgHDlDqANciNQI8fcQn~tplv-tiktokx-origin.jpeg?dr=14582&refresh_token=2cb57d08&x-expires=1792850400&x-signature=DO%2FPAbTUc%2Fwa1FIyPo%2FsOb712L0%3D&t=4d5b0474&ps=13740610&shp=0c75dd76&shcp=9b759fb9&idc=sg1"
    ],
    "videoCount": 1,
    "searchTerm": "running shoes",
    "country": "all",
    "totalAdsForSearch": 5000,
    "scrapedAt": "2026-10-24T08:51:21+00:00"
  }
]
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/tiktok-ad-library-scraper/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
