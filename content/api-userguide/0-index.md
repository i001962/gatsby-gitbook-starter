---
title: "Authenticate"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

Authentication is based on providing your API key and signing with the API secret.
You can request an API key and secret in the Developer portal.

In the examples below, the API key and secret is transmitted as custom header X-API-Key.
To create a valid value concatenate the API Key and secret separated by a space.

# Shell
```shell
X-API-Key: V....o= A...DRM="
```

# Java
```ava
HttpURLConnection con = ...
con.addRequestProperty("X-API-Header", apiKey + " "+ apiSecret);
```
 # HTTP Header
You can also transmit the information in query parameters as an alternative (see API docs below)

Base URLs:

* <a href="https://developers.cryptowerk.com/platform/API/v8">https://developers.cryptowerk.com/platform/API/v8</a>

* <a href="https://developers.cryptowerk.com/platform/API/v7">https://developers.cryptowerk.com/platform/API/v7</a>

* <a href="https://developers.cryptowerk.com/platform/API/v6">https://developers.cryptowerk.com/platform/API/v6</a>

API Key (APIKeyHeader)
* Parameter Name: **X-API-Key**, in: header. Concatenation of the API key and secret separated by a space.
