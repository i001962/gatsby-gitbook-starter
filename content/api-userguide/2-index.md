---
title: Check Registration Status

language_tabs: # must be one of https://git.io/vQNgJ
  - bash
  - ruby
  - python
  - javascript

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/sarasate/gate'>Documentation Powered by Gate</a>

includes:
  - errors

search: true
---

`POST /register`

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyHeader
</aside>

# shell
```shell
# You can also use wget
curl -X POST https://developers.cryptowerk.com/platform/API/v8/verify \
  -H 'Accept: application/json' \
  -H 'X-API-Key: API_KEY'

```
# http
```http
POST https://developers.cryptowerk.com/platform/API/v8/verify HTTP/1.1

Accept: application/json

```
# javascript
```javascript
var headers = {
  'Accept':'application/json',
  'X-API-Key':'API_KEY'

};

$.ajax({
  url: 'https://developers.cryptowerk.com/platform/API/v8/verify',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```
# nodejs
```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-API-Key':'API_KEY'

};

fetch('https://developers.cryptowerk.com/platform/API/v8/verify',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```
# ruby
```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-API-Key' => 'API_KEY'
}

result = RestClient.post 'https://developers.cryptowerk.com/platform/API/v8/verify',
  params: {
  }, headers: headers

p JSON.parse(result)

```
# python
```python
import requests
headers = {
  'Accept': 'application/json',
  'X-API-Key': 'API_KEY'
}

r = requests.post('https://developers.cryptowerk.com/platform/API/v8/verify', params={

}, headers = headers)

print r.json()

```
# java
```java
URL obj = new URL("https://developers.cryptowerk.com/platform/API/v8/verify");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```
# Go
```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-API-Key": []string{"API_KEY"},

    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://developers.cryptowerk.com/platform/API/v8/verify", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```
# php
```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-API-Key' => 'API_KEY',

    );

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://developers.cryptowerk.com/platform/API/v8/verify', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

`POST /verify`

*Verify hashes, check registration*

Either (1) check registration status of previously registered hashes or (2) verify a previously issued seal.

<h3 id="verify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|version|query|integer|false|API version to use by this call. Usually, you leave this empty and are specifying the version in the URL as .../vN/... . If for some reason you don't - or you want to override the version given in the URL - use this parameter.|
|retrievalId|query|string|false|This is the retrievalId that was returned in a previous 'register' call.|
|retrievalIds|query|array[string]|false|Here you can specify more than one 'retrievalId' in order to check more than one previously submitted registration status.|
|provideVerificationInfos|query|boolean|false|This provides additional verification information.|
|verifyDocHashes|query|string|false|This is the start of the second group of operations, u.e. to verify a previously issued seal.|
|seals|query|string|false|This is a comma-separated list of seals to check against the hashes.|
|provideInstructions|query|boolean|false|This provides additional instructions to verify the hash(es).|
|apiKey|query|string|false|Key that identifies the account. It can be provided (1) here as a query parameter or (2) as a header named X-API-Key with apiKey and apiCredential separated by a blank space or (3) by logging in using AWS Cognito.|
|apiCredential|query|string|false|A credential matching a user of an account. It can be provided (1) here as a query parameter or (2) as a header named X-API-Key with apiKey and apiCredential separated by a blank space or (3) by logging in using AWS Cognito. The API credential is only valid together with the API key. It verifies the authenticity of the account access.|

#### Detailed descriptions

**retrievalId**: This is the retrievalId that was returned in a previous 'register' call.

**retrievalIds**: Here you can specify more than one 'retrievalId' in order to check more than one previously submitted registration status.

**verifyDocHashes**: This is the start of the second group of operations, u.e. to verify a previously issued seal.

Note that instead you also can verify that yourself. We provide software in source code for that purpose.
This ensures that you don't have to rely on us to be able to prove the existence of a registration to anyone.
However, you might want to use this verification service for convenience.
This parameter contains a comma-separated list of hex-encoded hashes of the document(s) you want to check against a previous registration.
An example value would be:
1111111111111111111111111111111111111111111111111111111111111111,
2222222222222222222222222222222222222222222222222222222222222222

> Example responses

> 200 Response

```json
{
  "minSupportedAPIVersion": 0,
  "maxSupportedAPIVersion": 0,
  "documents": [
    {
      "retrievalId": "string",
      "seals": [
        {
          "bundleMethod": "BALANCED_MERKLE_TREE",
          "operations": [
            {
              "opcode": "DOC_SHA256",
              "docHash": "181210f8f9c779c26da1d9b2075bde0127302ee0e3fca38c9a83f5b1dd8e5d3b"
            }
          ]
        }
      ],
      "name": "string",
      "submittedAt": 0,
      "contentType": "string",
      "hasBeenInsertedIntoAtLeastOneBlockchain": true,
      "hasBeenInsertedIntoAllRequestedBlockchains": true,
      "blockchainRegistrations": [
        {
          "blockChainId": "string",
          "insertedIntoBlockchainAt": 0,
          "numConfirmations": 0,
          "blockChainDesc": {
            "instanceName": "string",
            "generalName": "string"
          }
        }
      ]
    }
  ]
}
```


<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyHeader
</aside>
