const axios = require('axios').default
const config = {
    auth: {
      username: 'tyltinnovations566449238',
      password: 'gceg40prvfr0u9l1jliqlf9rg7'
    },
  }
module.exports = {
    convertCurrency: function convertCurrency(perferredCurrency, amount) {
        axios.get(`https://xecdapi.xe.com/v1/convert_to.json/?to=CAD&from=${perferredCurrency}&amount=${amount}`,config)
        .then(function (response) {
          console.log(response.data.from)
        })
        .catch(function (error) {
         console.log() 
          // handle error
          console.log(error.response.data);
        })
        .finally(function () {
          // always executed
        });
    }
}