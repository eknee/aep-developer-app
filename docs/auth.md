# How to use Postman with the app and Adobe I/O

In this tutorial you will learn how to leverage the [AEP Developer App](https://github.com/eknee/aep-developer-app) to generate an access token to use with the Adobe application APIs.

## Pre-requisites
* AEP Developer App
* Postman
* Adobe I/O Project
* Access to at least one Experience Cloud application
 
***

# Step-by-Step Guide

## Import the Adobe I/O Auth Postman Collection
1. Download and install the AEP Developer App -> instructions can be found [here](wiki/Tutorial-%7C-How-to-download-and-install-the-app)
1. Download and install [Postman](https://www.postman.com/downloads/)
1. Open Postman and click on `File -> Import` from the application menu  

   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/postman-menu-import.png" width="25%" height="" />

1. Drag 'n drop or open the directory and select the `Adobe I-O Auth.postman_collection.json` file from the repo you downloaded in step 1  

   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/postman-select-file.png" width="50%" height="" />

1. Click the `Import` button   

   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/postman-import-file.png" width="60%" height="" />

1. Navigate to your default workspace in postman and you should now see a collection named `Adobe I/O Auth`  

   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/postman-adobe-io-auth-collection.png" width="60%" height="" />



## Setup your Adobe I/O Project
1. Open a browser window and navigate to the below url:
   ```
   https://console.adobe.io
   ```
   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/adobe-io-login.png" width="75%" height="" />  

1. Create an Adobe ID or login with your existing Adobe ID `<email>/<password>`

   > Note in order to use Experience Cloud product API's and subscribe to events your company administrator must assign you the necessary product permissions and developer rights via the Adobe Admin Console. You can learn more at this [link](https://helpx.adobe.com/enterprise/using/admin-console.html).
   >    
   > _*The remaining part of this tutorial assumes you have access to Experience Platform and have been assigned the appropriate permissions and developer rights_

1. Once logged in click the `Create New Project` button in the top right corner of the browser

   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/create-new-project.png" width="100%" height="" />

1. Rename your project by clicking the `Edit Project` button at the top right of the browser.

   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/name-project.png" width="100%" height="" />

   Add a name and click `Save`  

   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/save-project-name.png" width="50%" height="" />

1. Next we need to add an `API` to the project. Click the `Add to Project` button in the top left of the browser  

   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/add-api-to-project.png" width="100%" height="" />

1. Filter the list of API's by product. Select `Adobe Experience Platform` and then select the `Experience Platform API`. Click `Next` in the lower right of the screen 

   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/add-experience-platform-apis.png" width="100%" height="" />

1. You now need to provide an ssh key. Adobe gives you two options: `Generate a key pair` or `Upload your public key`. Choose the first option `Generate a key pair` and then click the button `Generate Keypair` in the lower right of the browser. 

   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/generate-key-pair.png" width="100%" height="" />

   This will immediately download a `config.zip` file to your local machine that contains both both the private and public key for your Adobe I/O project. 

   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/private-public-keys.png" width="20%" height="" />

   > _**Save this to a safe place before proceeding**_ 

1. Next you will need to choose a product profile to assign the Adobe I/O project to. After selecting a product profile click the button `Save configured API` in the lower right of your browser  
   > Your screen will look different here based on your organizations licensed products so select the appropriate product profile. If you aren't sure which one to select please reach out to your company's Adobe administrator

   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/select-product-profile.png" width="100%" height="" />

1. Awesome sauce! You have now setup your 1st Adobe I/O project and you have granted your project access to the Adobe Experience Platform APIs.
   > Note that you can always add more to your project at any time: API, Event, Plugin and Runtime (licensed only). In fact I have another tutorial where we'll do just this which you can find here.

   Now that you have your project setup we want to download the Postman Environment Collection. Near the upper right coroner of your browser window you will see a button `Download for Postman`. Click it and you should immediately see a file downloaded to your local machine named `service.postman_environment.json`.  Note its location as we will need it for the next part of this tutorial.  

   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/download-postman-environment.png" width="100%" height="" />


## Generate your Adobe I/O Access Token
1. Okay lets head back to Postman. Open Postman (assuming you closed it) and click on `File -> Import` from the application menu  

   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/postman-menu-import.png" width="25%" height="" />

1. Drag 'n drop or open the directory and select the `service.postman_environment.json` file you just downloaded from your Adobe I/O project    

   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/postman-select-file.png" width="50%" height="" />

1. Click the `Import` button   

   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/postman-environment-import.png" width="50%" height="" />

1. In Postman, near the upper right corner of the application where it says `No Environment`, click the drop down and select your imported environment. It should be named like so `Adobe IO Developer App...`  

   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/select-postman-environment-censored.jpg" width="30%" height="" />
   
   This sets the environment settings in the Postman application. Now any API call you make from any Postman Collection will reference the variables in that Environment.

1. Now we need to add the private key to the environment settings. Open the `config.zip` file you downloaded earlier and then open the `private.key` file. Copy the contents of the file and add it to the Postman Collection in the variable named `PRIVATE KEY`. Note you need to add it to both the initial and current value sections.
   > If authentication fails later in the tutorial it may be because you have a malformed private key from copy/paste. When copied the key should contain line breaks and the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` lines

   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/add-private-key-to-environment-censored.jpg" width="100%" height="" />

   Click `Save` after you add the private key

1. You are now ready to make your authentication call. Switch back to your terminal and start your app with the following command

   ```
   node /<directory>/app.js
   ```

   You should then see the following response in your console: `Started server at http://localhost:3000`

1. Go back to Postman and navigate to the `Adobe I/O Auth` Postman Collection and click on the `Generate Access Token` POST API.

   <img src="https://github.com/eknee/adobe-io-developer-app/blob/main/images/wiki/postman-access-token-response-censored.jpg" width="100%" height="" /> 

   A successful response should return the payload shown below which is automatically parsed and appended to your environments `ACCESS_TOKEN` variable in Postman. Now all subsequent calls to any of the Experience Platform APIs will contain the appropriate authentication information.

   ```
   {
       "token_type": "bearer",
       "access_token": "XXXXXXXX",
       "expires_in": 86399988,
       "psql": "psql 'sslmode=require host=somehostname.platform-query.adobe.io port=80 dbname=prod:all user=someorg@AdobeOrg password=XXXXX'"
   }
   ```

   > The `psql` value is only populated if you pass the `tenant_name` and `sandbox_name` in the request. Its purpose is to provide you with the authentication statement you can paste into yoru terminal to work directly with the Experience Platform Query Service.  
   >
   >_**It is not required for generating an access token.**_
