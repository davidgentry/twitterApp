console.log('the bot is starting');

var Twit = require('twit');
var config = require('./config.js');

var T = new Twit(config);

var params = { 
    user_id: '@Ole_Cutty', 
    count: 10
}

T.get('statuses/user_timeline', params, gotData);

function gotData(err, data, response){
   console.log(data); 
    
}