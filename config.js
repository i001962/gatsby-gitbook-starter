const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://developers.cryptowerk.com",
		"gaTrackingId": null
	},
	"header": {
		"logo": "https://cryptowerk.com/wp-content/uploads/2018/01/cryptowerk-favicon-1.png",
		"logoLink": "https://developers.cryptowerk.com/platform/portal/swagger.html",
		"title": "Developer Docs",
		"githubUrl": "https://github.com/i001962/gatsby-gitbook-boilerplate",
		"helpUrl": "",
		"tweetText": "tweet text goes here",
		"links": [
			{ "text": "links text", "link": "test.com"}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
    		"/api-userguide",
				"/faq"
		],
		"links": [
			{ "text": "App Console", "link": "https://developers.cryptowerk.com/platform/portal/swagger.html"},
			{ "text": "Cryptowerk Homepage", "link": "https://cryptowerk.com"},
		],
		"frontline": true,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Cryptower Developer Docs",
		"description": "Documentation built with mdx. Powering developer.crypowerk.com ",
		"ogImage": null,
		"docsLocation": "https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content",
		"favicon": "https://cryptowerk.com/wp-content/uploads/2018/01/cryptowerk-favicon-1.png"
	},
};

module.exports = config;
