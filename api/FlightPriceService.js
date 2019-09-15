const axios = require('axios')
const querystring = require('querystring')
const config = {
    headers: {
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      'x-rapidapi-key': '6173e36138msh426bdce533ea798p1cbaafjsn148e9b084d52',
    }
  }

module.exports = {
    getFlightPrices: function getFlightPrices(originAirport, university, dateOfDeparture, dateOfReturn) {
      const promise = new Promise((resolve) => {
        const airportMapping = {
          'University of Toronto' : 'YYZ-sky',
          'University of Waterloo' : 'YKF-sky',
          'Ryerson University' : 'YYZ-sky',
          'McMaster University' : 'YHM-sky',
          'Western University' : 'YXU-sky',
          'University of Ottawa' : 'YOW-sky',
          'Carleton University' : 'YOW-sky',
          'University of Windsor' : 'YQG-sky',
          'OCAD University' : 'YYZ-sky',
          'Queen\'s University' : 'YGK-sky',
          'York University' : 'YYZ-sky',
          'University of Guelph' : 'YYZ-sky',
          'Brock University' : 'YYZ-sky',
          'Wilfrid Laurier University' : 'YKF-sky',
      }
      const originAirportString = originAirport + '-sky'
      axios.get(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/CA/CAD/en-US/${originAirportString}/${airportMapping[university]}/${dateOfDeparture}?`+querystring.stringify({ query: dateOfReturn}),config)
      .then(function (response) {
        let totalPrice = 0
        const quoteArray = response.data.Quotes
        quoteArray.forEach((quote) => {
          totalPrice += quote.MinPrice
        })
        resolve(totalPrice);
      })
      .catch(function (error) {
       console.log() 
        // handle error
        console.log(error.response.data);
      })
      .finally(function () {
        // always executed
      });
      })
      return promise;
    }
}
