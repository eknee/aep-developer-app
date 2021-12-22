//Required modules
const express = require('express');
const url = require('url');
const bodyParser = require('body-parser');
const auth = require('@adobe/jwt-auth');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));


//Handle Adobe I/O Webhook Challenge
app.get('/', async (req, res) => {
	
	const qs = url.parse(req.url,true).query;
	//console.log( {"querystring": qs} );
	const challenge = qs.challenge;
	console.log(challenge);
	res.send(challenge)
});


//Handle Adobe I/O Authentication Request
app.post('/auth', async (req, res) => {

	try {

		/*
		var privateKeyPath = req.body.private_key_path;
		privateKeyPath = privateKeyPath.replace(/\//g,'/');
		console.log(privateKeyPath)
		*/

		//set config
		const config = {
		  clientId: req.body.client_id,
		  clientSecret: req.body.client_secret,
		  technicalAccountId: req.body.technical_account_id,
		  orgId: req.body.org_id,
		  privateKey: req.body.private_key,
		  metaScopes: ['ent_dataservices_sdk']
		};
		//config.privateKey = fs.readFileSync(privateKeyPath);

		let tokenResponse = await auth(config);	//jwt-auth response
		console.log(tokenResponse);

		if(req.body.tenant_name && req.body.sandbox_name) {
			var psql = "psql 'sslmode=require host=" + req.body.tenant_name + ".platform-query.adobe.io port=80 dbname=" + req.body.sandbox_name + ":all user=" + req.body.org_id + " password=" + tokenResponse.access_token + "'"
			tokenResponse['psql'] = psql;
			console.log(tokenResponse)
		}

		res.status(200).send(tokenResponse);  //return response to client
	}
	catch (error) {
		res.status(404).send(error)
		console.log(error)
	}
});

var port = 3000;
app.listen(port, () => console.log('Started server at http://localhost:'+port));