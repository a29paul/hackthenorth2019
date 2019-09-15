const axios = require('axios').default
const config = {
    auth: {
      username: 'tyltinnovations566449238',
      password: 'gceg40prvfr0u9l1jliqlf9rg7'
    },
  }
module.exports = {
    convertCurrency: function convertCurrency(perferredCurrency, amount) {
      const promise = new Promise ((resolve) => {
        axios.get(`https://xecdapi.xe.com/v1/convert_to.json/?to=CAD&from=${perferredCurrency}&amount=${amount}`,config)
        .then(function (response) {
          resolve(response.data.from[0].mid)
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