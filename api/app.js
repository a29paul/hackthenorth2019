const express = require('express');
const app = express();
const FlightPriceService = require('./FlightPriceService');
const CurrencyConverterService = require('./CurrencyConverterService');
const AzureService = require('./AzureService');
const GoogleService = require('./GoogleService');
const AccentoursService = require('./AccentoursService')

const cors = require('cors');
const bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(function(req, res, next) {
    //set headers to allow cross origin request.
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
app.post('/flightPrices', async (req,res) => {
    const originAirport = req.body.originAirport
    const university = req.body.university
    const dateOfDeparture = req.body.dateOfDeparture
    const dateOfReturn = req.body.dateOfReturn
    
    const flightPriceCAD = await FlightPriceService.getFlightPrices(originAirport, university, dateOfDeparture, dateOfReturn)
    const data = {
        price: flightPriceCAD,
    }
    const jsonify = JSON.stringify(data)
    res.send(jsonify)
})
app.post('/moneyConvert', async (req,res) => {
    const perferredCurrency = req.body.perferredCurrency;
    const amount = req.body.amount;
    const convertedCurrency = await CurrencyConverterService.convertCurrency(perferredCurrency, amount)
    const data = {
        convertedValue: convertedCurrency,
    }
    const jsonify = JSON.stringify(data)
    res.send(jsonify)
})

app.post('/newsFeed', async (req,res) => {
    const university = req.body.university;
    const news = await AzureService.newsInfo(university)
    const data = {
        newsArray: news,
    }
    const jsonify = JSON.stringify(data)
    res.send(jsonify)
})

app.post('/optimize', async (req,res) => {
    const isLocal = req.body.isLocal;
    const origin = req.body.origin;
    const arrayOfUniversities = req.body.universities;
    const orderedArray = await GoogleService.optimizeRoute(isLocal, origin, arrayOfUniversities)
    const data = {
        orderedArray
    }
    const jsonify = JSON.stringify(data)
    res.send(jsonify)
})
app.post('/create_user', async (req,res) => {
    const username = req.body.username;
    const response = await AccentoursService.createUser(username)
    const jsonify = JSON.stringify(response)
    res.send(jsonify)
})
app.post('/book_tour', async (req,res) => {
    const username = req.body.username;
    const tour_id = req.body.tour_id;
    const spots_required = req.body.spots_required;
    const response = await AccentoursService.book_tour(username, tour_id, spots_required)
    const jsonify = JSON.stringify(response)
    res.send(jsonify)
})
app.get('/get_tours', async (req,res) => {
    const university = req.body.university;
    const response = await AccentoursService.get_tours(university)
    const jsonify = JSON.stringify(response)
    res.send(jsonify)
})




app.listen(3000)


