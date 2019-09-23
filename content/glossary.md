---
title: "Glossary"
metaTitle: "This is the title tag of this page"
metaDescription: "This is the meta description"
---

<h1 id="sealapi">Terms</h1>


# Overview
*Register hashes*

The register command posts a hash of a document or any data for
registration on a blockchain. The blockchain entry can later be used as
a mathematical proof for the existence of this data at the moment it was
posted.

<h3 id="register-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|version|query|integer|false|API version to use by this call. Usually, you leave this empty and are specifying the version in the URL as .../vN/... . If for some reason you don't - or you want to override the version given in the URL - use this parameter.|
|name|query|string|false|Name of the document|
|hashes|query|string|true|Comma separated hexadecimal representation of the hashes for|
|contentType|query|string|false|This value describes the content type (mime type) of the data.|
|lookupInfo|query|string|false|Here, you can provide your own information that later helps you in looking up your data where you want to put your seal. This can be any text string.|
|lookupInfos|query|string|false|This parameter provides the same functionality as parameter 'lookupInfo'. However, you provide a potentially different lookupInfo for each hash as a list separated by comma.|
|callback|query|string|false|Callback specification for the registration events in the requested blockchains.|
|apiKey|query|string|false|Key that identifies the account. It can be provided (1) here as a query parameter or (2) as a header named X-API-Key with apiKey and apiCredential separated by a blank space or (3) by logging in using AWS Cognito.|
|apiCredential|query|string|false|A credential matching a user of an account. It can be provided (1) here as a query parameter or (2) as a header named X-API-Key with apiKey and apiCredential separated by a blank space or (3) by logging in using AWS Cognito. The API credential is only valid together with the API key. It verifies the authenticity of the account access.|

## Detailed descriptions

**hashes**: Comma separated hexadecimal representation of the hashes for
the data to be registered for proof of existence.

**lookupInfo**: Here, you can provide your own information that later helps you in looking up your data where you want to put your seal. This can be any text string.
For instance, you might have a row in your database that holds the data you want to seal. This row might have a primary key that identifies it. You can set this parameter to this primary key of yours.
Later when a callback (see below) arrives or when you use the verify API call (see below), this lookupInfo is provided to you. Actually it's both in the seal itself and in the API response document.
Since you know that this actually is a primary key, you can easily retrieve the database row and store the seal in a column of that row.
This lookupInfo applies to all hashes provided.

**lookupInfos**: This parameter provides the same functionality as parameter 'lookupInfo'. However, you provide a potentially different lookupInfo for each hash as a list separated by comma.

**callback**: Callback specification for the registration events in the requested blockchains.
You can have a callback initiated either to a URL or to an email address or via an MQTT message.
URL: Use 'http' as the protocol specifier, then either 'jsonplain' for a plain JSON object or
'jsonformenc' for a URL-formencoded JSON object. Then add the http or https URL to call.
You can then add a format for the seal/stamp by adding a semicolon, 'stampFormat:' and either 'JSON'
for JSON or 'STREAM' for a compressed binary format.
Examples:
http:jsonplain:https://some.site.com/5d5803df-0e8b-4779-80e8 or
http:jsonformenc:http://another.com/14nv2 or
http:jsonformenc:http://yetanotherwebhook.com/14nve;stampFormat:JSON

By default, query parameters that you include in the URL are stripped from it and instead included in the POST body. For 'jsonplain', a JSON attribute 'query' is added that includes the key/value pairs from the query.
This is because it is generally discouraged to use query parameters, usually for a GET request, in a POST request.
If, however, you insist to issue a POST request including query parameters, add 'keepQuery:true'. For instance:
http:jsonplain:https://some.site.com/5d5803df-0e8b-4779-80e8?myparameter=somevalue;keepQuery:true

Email: Use 'email' as the protocol specifier, then, like for 'http' use 'jsonplain' or 'jsonformenc',
then the email address, and then optionally a stamp format. Example:
email:jsonplain:callbacktest@somemaildomain.com

MQTT: Use 'mqtt' as the protocol specifier, then the endpoint for the message broker, a semicolon,
the topic used for publishing, a semicolon, a JSON object template that might contain some id or reference
for your internal use and is filled with the event in JSON format. Note that you cannot use
a semicolon in the JSON template.
Example:
mqtt:tcp://mqttcc1.cryptowerk.com:1883;test/topic2;{myCustomId:'someid1'}
