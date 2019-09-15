const express = require('express');
const app = express();
const FlightPriceService = require('./FlightPriceService');
const CurrencyConverterService = require('./CurrencyConverterService');
const AzureService = require('./AzureService');


app.get('/flightPrice', async (req,res) => {
    const flightPrice = FlightPriceService.getFlightPrices('YYZ', 'University of Toronto', '2019-')
    res.send()
})

app.listen(3000)
