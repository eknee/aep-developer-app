# adobe-io-developer-app
 
This is a quick start Node.js app for anyone looking to start playing with the Adobe Experience Platform APIs or Adobe I/O webhooks. It has two methods is supports today:

* GET '/' - receives and responds to challenge request when setting up a webhook in Adobe I/O
* POST '/auth' - used to locally sign a JWT and request an access token from Adobe IMS

## Dependencies
* node.js - https://nodejs.org/en/download/
* Express - https://expressjs.com/en/starter/installing.html
* @adobe/jwt-auth - https://github.com/adobe/jwt-auth
* ngrok - https://ngrok.com/download (or other webhook software)
