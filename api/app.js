// const axios = require('axios').default;
// const querystring = require('querystring')
// const departureAirport = '' + '-sky';
// const closestAirport = '' + '-sky';
// const countryOfOrigin = '';
// const preferredCurrency = '';

const express = require('express');
const app = express();




// // const options = {
// //     method: 'GET',
// //     url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/GBP/en-us/',
// //     qs: {query: 'Waterloo'},
// //     headers: {
// //       'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
// //       'x-rapidapi-key': '6173e36138msh426bdce533ea798p1cbaafjsn148e9b084d52'
// //     }
// //   };

// var options = {
//     method: 'GET',
//     url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/${countryOfOrigin}/CAD/en-US/${departureAirport}/${}/2019-09-01`,
//     qs: {inboundpartialdate: '2019-12-01'},
//     headers: {
//       'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
//       'x-rapidapi-key': '6173e36138msh426bdce533ea798p1cbaafjsn148e9b084d52'
//     }
//   }
//   request(options, function (error, response, body) {
//     if (error) throw new Error(error);
//       console.log(body)
// });

const FlightPriceService = require('./FlightPriceService');
const CurrencyConverterService = require('./CurrencyConverterService');
const AzureService = require('./AzureService');


