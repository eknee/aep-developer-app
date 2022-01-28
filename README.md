# AEP Developer App
 
This is a quick start Node.js app for anyone looking to start playing with the Adobe Experience Platform APIs or Adobe I/O webhooks. It has two methods is supports today:

* GET '/' - receives and responds to challenge request when setting up a webhook in Adobe I/O
* POST '/auth' - used to locally sign a JWT and request an access token from Adobe IMS

### Dependencies
* node.js - https://nodejs.org/en/download/
* Express - https://expressjs.com/en/starter/installing.html
* @adobe/jwt-auth - https://github.com/adobe/jwt-auth
* ngrok - https://ngrok.com/download (or other webhook software)

### Project Wiki
https://github.com/eknee/aep-developer-app/wiki/
<br>
<br>

***

## Postman Collection - Adobe I/O Auth
To make authentication calls to any Adobe application you must have an `access token`. An access token can only be created by passing a JWT token that contains the identity of your Adobe I/O project integration ([learn more here](https://www.adobe.io/developer-console/docs/guides/authentication/JWT/)). This API does three things for you as the developer when used with the Adobe I/O Developer App: 
1) Creates a `JWT` locally on your machine using the Postman Environment variables 
2) Exchanges the `JWT` with the Adobe Identity Management Service (IMS) along with your Adobe I/O Project `client_id (api_key)` and `client_secret` and responds with an `access_token`
3) _(Optionally)_ will generate a psql statement which you can use to authenticate with the Experience Platform Query Service

<br>

Sample request looks like so:
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
--data-urlencode 'tenant_name=XXXXX' \
--data-urlencode 'sandbox_name=XXXXX'
```
> `tenant_name` and `sandbox_name` are optional to pass and only used for generating the psql statement in the response. They are not required for creating the JWT or requesting an access token

<br>


Sample response will look like this:
```
{
    "token_type": "bearer",
    "access_token": "XXXXXXXX",
    "expires_in": 86399988,
    "psql": "psql 'sslmode=require host=XXXXX.platform-query.adobe.io port=80 dbname=prod:all user=XXXXX@AdobeOrg password=XXXXX'"
}
```

* `token_type` : always will be of type bearer
* `access_token` : used to authenticate in any API call using Adobe APIs. Expires in 24hrs
* `expires_in` : milliseconds until the access token expires
* `psql` : authentication command you can copy/paste in your terminal to work with Experience Platform Query Service
