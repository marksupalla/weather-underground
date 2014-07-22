'use strict';

var request = require('request');

function Weather(){}

Weather.high = function(loc, cb){
  var url = 'http://api.wunderground.com/api/e972031c42874e44/forecast/q/' + loc + '.json';

  request(url, function(error, response, body){
    body = JSON.parse(body);
    var high = body.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    var temp = high + 'F';
    cb(temp);
  });
};

Weather.low= function(loc, cb){
  var url = 'http://api.wunderground.com/api/e972031c42874e44/forecast/q/' + loc + '.json';

  request(url, function(error, response, body){
    body = JSON.parse(body);
    console.log(body);
    debugger;
    var low = parseInt(body.forecast.simpleforecast.forecastday[0].low.fahrenheit);
    var temp = low + 'F';
    cb(temp);
  });
};

Weather.avghigh = function(loc,cb){
  var url = 'http://api.wunderground.com/api/e972031c42874e44/forecast10day/q/' + loc + '.json';

  request(url, function(error, response, body){
    body = JSON.parse(body);
    var total = 0;
    var forecasts = body.forecast.simpleforecast.forecastday;
    for(var i= 0; i < forecasts.length; i++){
      total += parseInt(forecasts[i].high.fahrenheit);
    }

    var avg = (total/10 + 'F');
    cb(avg);
  });
};

Weather.avglow = function(loc,cb){
  var url = 'http://api.wunderground.com/api/e972031c42874e44/forecast10day/q/' + loc + '.json';

  request(url, function(error, response, body){
    body = JSON.parse(body);
    var total = 0;
    var forecasts = body.forecast.simpleforecast.forecastday;
    for(var i= 0; i < forecasts.length; i++){
      total += parseInt(forecasts[i].low.fahrenheit);
    }

    var avg = (total/10 + 'F');
    cb(avg);
  });
};

module.exports = Weather;
