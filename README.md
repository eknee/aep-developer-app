# Adobe I/O Developer App
 
This is a quick start Node.js app for anyone looking to start playing with the Adobe Experience Platform APIs or Adobe I/O webhooks. It has two methods is supports today:

* GET '/' - receives and responds to challenge request when setting up a webhook in Adobe I/O
* POST '/auth' - used to locally sign a JWT and request an access token from Adobe IMS

## Dependencies
* node.js - https://nodejs.org/en/download/
* Express - https://expressjs.com/en/starter/installing.html
* @adobe/jwt-auth - https://github.com/adobe/jwt-auth
* ngrok - https://ngrok.com/download (or other webhook software)

## Adobe I/O Auth - Generate Access Token Details
To make authentication calls to any Adobe application you must have an `access token`. An access token can only be created by passing a JWT token that contains the indentity of your Adobe I/O project integration. This API does two things for you as the developer: 
1) creates a `JWT` locally on your machine using the Postman Environment variables 
2) exchanges the `JWT` with the Adobe Identity Management Service (IMS) along with your Adobe I/O Project `Client Key (API Key)` and responds with an `access token`

A sample request looks like so:
```
curl --location --request POST 'http://localhost:3000/auth' \
--header 'Cache-Control: no-cache' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id=XXXXX' \
--data-urlencode 'technical_account_id=XXXXX@techacct.adobe.com' \
--data-urlencode 'org_id=XXXXX@AdobeOrg' \
--data-urlencode 'client_secret=XXXXX' \
--data-urlencode 'private_key=XXXXX' \
--data-urlencode 'meta_scopes=ent_dataservices_sdk' \
--data-urlencode 'tenant_name=' \
--data-urlencode 'sandbox_name='
```

The response will look like this:
```
{
    "token_type": "bearer",
    "access_token": "XXXXXXXX",
    "expires_in": 86399988,
    "psql": "psql 'sslmode=require host=XXXXX.platform-query.adobe.io port=80 dbname=prod:all user=XXXXX@AdobeOrg password=XXXXX'"
}
```

   > The `psql` value is only populated if you pass the `tenant_name` and `sandbox_name` in the request. Its purpose is to provide you with the authentication statement you can paste into yoru terminal to work directly with the Experience Platform Query Service.  
   >
   >_**It is not required for generating an access token.**_



# Project Wiki
https://github.com/eknee/adobe-io-developer-app/wiki/
