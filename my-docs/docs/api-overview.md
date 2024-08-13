---
sidebar_position: 1
---

# API Overview

The Kenyan Counties API allows you to retrieve and search Kenyan counties and sub-counties.
> Base Url `https://kenyan-counties.vercel.app`

## Endpoints

### Get Counties

Retrieves a list of counties and their sub-counties.

**Endpoint:** `/counties`

**Method:** `GET`

**Query Parameters:**

- `countyCode` (optional): The code of the county to filter by.
- `countyName` (optional): The name of the county to filter by.
- `subCountyName` (optional): The name of the sub-county to filter by.

**Responses:**

- `200 OK`: Returns a list of counties and sub-counties.
- `400 Bad Request`: Invalid query parameters.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**

```http
https://kenyan-counties.vercel.app/counties?countyCode=1

```
### Example Request
```json
[
  {
    "countyCode": 1,
    "countyName": "MOMBASA",
    "subCounties": [
      {
        "subCountyCode": 101,
        "subCountyName": "CHANGAMWE"
      }
    ]
  }
]
```

### Get Sub-Counties by County

Retrieves a list of sub-counties for a specific `county`.

Endpoint: `/counties/{`county`}/sub-counties`

Method: `GET`

Path Parameters:

  - `county` (required): The name of the county for which to retrieve sub-counties.

Responses:

  - `200` OK: Returns a list of sub-counties for the specified county.
  - `404` Not Found: The specified county does not exist.
  - `500` Internal Server Error: Unexpected server error.

Example Request:

```http
https://kenyan-counties.vercel.app/counties/mombasa/sub-counties
```

### Example Response

```json
[
  {
    "subCountyCode": 101,
    "subCountyName": "CHANGAMWE"
  }
]

```