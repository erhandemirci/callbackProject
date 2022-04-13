const express = require('express');

const app = express();
const axios = require("axios");

const apiUrl = "https://www.googleapis.com/youtube/v3";
const apiKey = "AIzaSyBlXc-nqwgBRjfVnEglrBzoVTC21-dHBy4";
const channelId = "UC1zAttFQKikWoKH3Vb39ETA";

    // get an instance of router
var router = express.Router();


//https://youtube.googleapis.com/youtube/v3/search?channelId=UC1zAttFQKikWoKH3Vb39ETA&key=AIzaSyAnY52Lr-hOku3fdxVQLIbm45TpZbDWzvw

    // home page route (http://localhost:8080)
    router.get('/', function(req, res) {
        res.send("google-site-verification=ZPV3ADqzl5x-Z3e_WDGPt1TjgJCzNN3_dxmpDibSy0o");
        
    });

router.get('/youtube/callback', (req, res) => {
    //console.log('here', req.body, req.query, req.params, req.headers)
    console.log('here', req.body)
    let query = req.query
    if('hub.challenge' in query){
        let channelID = query['hub.topic'].split('=').pop()
        /*if(!bot.youtube.pendingVerify.has(channelID)) {
            console.log('Invalid youtube hook sent to me', channelID, req.headers)
            return res.sendStatus(401)
        }*/
       /* bot.youtube.lease.set(channelID, Date.now() + (query['hub.lease_seconds'] * 1000))
        bot.youtube.pendingVerify.delete(channelID)*/
        //return res.status(202).send(query['hub.challenge'])
        
        //const responseText = req.query['hub.challenge'] || "no challenge" 
       // res.send(responseText)
    }
    return req.query['hub.challenge'] 
})

router.post('/youtube/callback', (req, res) => {
    console.log('here', res.body)
    //console.log('here post', req.body, req.query, req.params, req.headers)
 return req.query['hub.challenge'] 
   // let hmac = generateHMAC(req.query['hub.challenge'], 'very_secret', "sha1")
})
/*
function generateHMAC(hmac, secret, algo = 'sha256'){
    return `${algo}=${crypto.createHmac(algo, secret).update(hmac).digest('hex')}`
}
*/

    // apply the routes to our application
    app.use('/', router);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
