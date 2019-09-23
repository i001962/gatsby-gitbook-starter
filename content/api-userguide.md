---
title: "Horizon API"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

# Overview

Cryptowerk Horizon API writes hashes of data into the Bitcoin and Ethereum blockchain by default. Hashes will be
submitted in the register call and the result contains a unique retrieval-ID. Cryptowerk bundles the collected
hashes and creates a single super-hash. This super-hash is then written into the Bitcoin blockchain and Ethereum
blockchain. After the super-hash has been stored in one or more blockchains, the retrieval-ID will be exchanged
with a Seal. A Seal contains all information necessary to prove that the hashes registered are now part of the
chosen blockchains.

The flows supported by this API are:

Hash(es)  -->  retrieval-ID  -->  Seal

The retrieval-ID for each hash can be found in the response JSON of a sucessful 'register' call.

There are two approaches to retrieve the actual Seal:

# Polling

Call `/verify` in an interval and provide the retrievalID(s) and check for the return value.
If you don't have the retrievalID, you can also use the hash originally registered.
Note though that there could be duplicates returned. (Hashes are not unique)

# Webhook and Callback

Specify a `callback` URL when registering hashes using `/register`.
Once the Seal becomes available the Cryptowerk Horizon API will make a `POST` request to the URL given.
The `User-Agent` header of the request identifies the Cryptowerk Server and is set to `Cryptowerk Callback v1`.

If the endpoint is unavailable, Cryptowerk will retry every 5 minutes for 12 hours total. After that period, if your HTTP endpoint did not get operational within that timeframe, you can still retrieve your seal(s) using the verify API call.

In addition to using http or https, you can also publish a message to MQTT.

# Seals

A Seal contains the information required to prove that a document had been registered in a blockchain. I.e., among
other things, it contains a (transaction) identifier in one or multiple blockchains, the hash of a document,
the conclusive mathematical proof linking the document to the blockchain demonstrating the document's existence at
registration time and it not having been tampered with, the time this document was submitted to the server and
the time it was submitted to the blockchain.
