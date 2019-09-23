---
title: Cancel Callbacks
language_tabs:
  - shell
  - http
  - javascript
  - javascript--nodejs
  - ruby
  - python
  - java
  - go
  - php
toc_footers:
  - >-
    <a href="../../../apiResources/asset/userguide/SealAPI.html">User Guide and
    Examples</a>
includes: []
search: true
highlight_theme: darkula
headingLevel: 1

---

`POST /cancelAllCallbacks`

Cancel all pending callbacks belonging to your account. This is mainly useful for debugging in case your provided callback endpoint is under development. Then it may be that it is either not reachable or that it returns error codes. Instead of continuing to retry to invoke the callback you can clear the pending callbacks.

<h3 id="post__cancelallcallbacks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|version|query|integer|false|API version to use by this call. Usually, you leave this empty and are specifying the version in the URL as .../vN/... . If for some reason you don't - or you want to override the version given in the URL - use this parameter.|
|apiKey|query|string|false|Key that identifies the account. It can be provided (1) here as a query parameter or (2) as a header named X-API-Key with apiKey and apiCredential separated by a blank space or (3) by logging in using AWS Cognito.|
|apiCredential|query|string|false|A credential matching a user of an account. It can be provided (1) here as a query parameter or (2) as a header named X-API-Key with apiKey and apiCredential separated by a blank space or (3) by logging in using AWS Cognito. The API credential is only valid together with the API key. It verifies the authenticity of the account access.|

<h3 id="post__cancelallcallbacks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request (for example - header field missing, wrong filter, validation failed)|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden (insufficient authorization)|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyHeader
</aside>

> Code samples

# shell
```shell
# You can also use wget
curl -X POST https://developers.cryptowerk.com/platform/API/v8/cancelAllCallbacks \
  -H 'X-API-Key: API_KEY'

```
# http
```http
POST https://developers.cryptowerk.com/platform/API/v8/cancelAllCallbacks HTTP/1.1

```
# javascript
```javascript
var headers = {
  'X-API-Key':'API_KEY'

};

$.ajax({
  url: 'https://developers.cryptowerk.com/platform/API/v8/cancelAllCallbacks',
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
  'X-API-Key':'API_KEY'

};

fetch('https://developers.cryptowerk.com/platform/API/v8/cancelAllCallbacks',
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
  'X-API-Key' => 'API_KEY'
}

result = RestClient.post 'https://developers.cryptowerk.com/platform/API/v8/cancelAllCallbacks',
  params: {
  }, headers: headers

p JSON.parse(result)

```
# python
```python
import requests
headers = {
  'X-API-Key': 'API_KEY'
}

r = requests.post('https://developers.cryptowerk.com/platform/API/v8/cancelAllCallbacks', params={

}, headers = headers)

print r.json()

```
# java
```java
URL obj = new URL("https://developers.cryptowerk.com/platform/API/v8/cancelAllCallbacks");
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
        "X-API-Key": []string{"API_KEY"},

    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://developers.cryptowerk.com/platform/API/v8/cancelAllCallbacks", data)
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
    'X-API-Key' => 'API_KEY',

    );

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://developers.cryptowerk.com/platform/API/v8/cancelAllCallbacks', array(
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
