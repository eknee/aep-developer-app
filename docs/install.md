# Tutorial | How to download and install the app
A simple step-by-step guide for you install the app on your local machine and run it

***

## Step-by-Step Guide:
_This instruction list applies for users installing via linux or WSL_

1. Download the [aep-developer-app](https://github.com/eknee/aep-developer-app.git) repo to your local computer  

   ```
   git clone https://github.com/eknee/aep-developer-app.git <your-directory>
   ``` 

1. In order to run the app you must have node.js installed. If you don't please follow the directions below. If you do skip to step 3

   1. Download and install [node.js](https://nodejs.org/en/download/)
      ```
      sudo apt-get install nodejs
      ```

   1. Download and install npm (node package manager)  
      ```
      sudo apt-get install npm
      ```

1. In the directory you cloned the git repo in run the following command to install the dependencies

      ```
      npm install
      ```

1. The app should now be installed on your local machine. You can run it by simply executing the following command:

   ```
   node /<directory>/app.js
   ```

   You should then see the following response in your console:
   `Started server at http://localhost:3000`
