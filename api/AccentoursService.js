const axios = require('axios').default
const querystring = require('querystring')

module.exports = {
   createUser: function createUser(username){
    const promise = new Promise((resolve) => {
      axios.post(`http://accentour-final-bronze.uedpnpkwfs.us-east-2.elasticbeanstalk.com/create_user?username=${username}`)
      .then((res) => {
        resolve(res.data)  
      })
    })
    return promise;
   },
   book_tour: function book_tour(username, tour_id, spots_required){
      const promise = new Promise((resolve) => {
        axios.post(`http://accentour-final-bronze.uedpnpkwfs.us-east-2.elasticbeanstalk.com/book_tour?tour_id=${tour_id}&spots_required=${spots_required}&username=${username}}`)
        .then((res) => {
          resolve(res.data)  
        })
      })
      return promise;
     },
     get_tours: function book_tour(university){
      const promise = new Promise((resolve) => {
        axios.post(`http://accentour-final-bronze.uedpnpkwfs.us-east-2.elasticbeanstalk.com/get_universities`)
        .then((res) => {
          console.log(res)
        })
      })
      return promise;
     },
   
}
