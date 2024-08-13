---
sidebar_position: 1
---


# API Overview

The Kenyan Counties API allows you to retrieve and search Kenyan counties and sub-counties.

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
GET /counties?countyCode=1
```

##### Example Response 

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