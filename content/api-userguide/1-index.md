---
title: "Register Hashes"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---
`POST /register`

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyHeader
</aside>

# Shell

```shell
# You can also use wget
curl -X POST https://developers.cryptowerk.com/platform/API/v8/register?hashes=1111111111111111111111111111111111111111111111111111111111111111%2C2222222222222222222222222222222222222222222222222222222222222222 \
  -H 'Accept: application/json' \
  -H 'X-API-Key: API_KEY'

```
# HTTP
```http
POST https://developers.cryptowerk.com/platform/API/v8/register?hashes=1111111111111111111111111111111111111111111111111111111111111111%2C2222222222222222222222222222222222222222222222222222222222222222 HTTP/1.1

Accept: application/json

```
# javascript
```javascript
var headers = {
  'Accept':'application/json',
  'X-API-Key':'API_KEY'

};

$.ajax({
  url: 'https://developers.cryptowerk.com/platform/API/v8/register',
  method: 'post',
  data: '?hashes=1111111111111111111111111111111111111111111111111111111111111111%2C2222222222222222222222222222222222222222222222222222222222222222',
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

fetch('https://developers.cryptowerk.com/platform/API/v8/register?hashes=1111111111111111111111111111111111111111111111111111111111111111%2C2222222222222222222222222222222222222222222222222222222222222222',
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

result = RestClient.post 'https://developers.cryptowerk.com/platform/API/v8/register',
  params: {
  'hashes' => 'string'
}, headers: headers

p JSON.parse(result)

```
# Python
```python
import requests
headers = {
  'Accept': 'application/json',
  'X-API-Key': 'API_KEY'
}

r = requests.post('https://developers.cryptowerk.com/platform/API/v8/register', params={
  'hashes': '1111111111111111111111111111111111111111111111111111111111111111,2222222222222222222222222222222222222222222222222222222222222222'
}, headers = headers)

print r.json()

```
# Java
```java
URL obj = new URL("https://developers.cryptowerk.com/platform/API/v8/register?hashes=1111111111111111111111111111111111111111111111111111111111111111%2C2222222222222222222222222222222222222222222222222222222222222222");
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
    req, err := http.NewRequest("POST", "https://developers.cryptowerk.com/platform/API/v8/register", data)
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
    $response = $client->request('POST','https://developers.cryptowerk.com/platform/API/v8/register', array(
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
