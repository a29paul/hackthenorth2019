const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyAcNMA6kU_3uwJXK0FD8k2TtpDir3nfIEM',
    Promise: Promise,
  });

module.exports = {
  optimizeRoute: function optimizeRoute(isLocal ,origin, endDestination, arrayOfUniversities) {
    let addressArray = []
    let orderedUniversityList = []
    let endAddress = ''
    let originAddress = ''
    const universityAddressMap = { 
      "brock university":"1812 Sir Isaac Brock Way, St. Catharines,ON L2S 3A1",
      "carleton university":"1125 Colonel By Dr,Ottawa,ON K1S 5B6",
      "mcmaster university":"1280 Main St W, Hamilton, ON L8S 4L8",
      "ocad university":"100 McCaul St, Toronto, ON M5T 1W1",
      "queen\'s university":"99 University Ave, Kingston, ON K7L 3N6",
      "ryerson university":"350 Victoria St, Toronto, ON M5B 2K3",
      "university of guelph":"50 Stone Rd E, Guelph, ON N1G 2W1",
      "university of ottawa":"75 Laurier Ave E, Ottawa, ON K1N 6N5",
      "university of toronto":"27 King's College Cir, Toronto, ON M5S",
      "university of waterloo":"200 University Ave W, Waterloo, ON N2L 3G1",
      "university of windsor":"401 Sunset Ave, Windsor, ON N9B 3P4",
      "western university":"1151 Richmond St, London, ON N6A 3K7",
      "wilfrid laurier university":"75 University Ave W, Waterloo, ON N2L 3C5",
      "york university":"4700 Keele St, Toronto,ON M3J 1P3"
   }
   const airportAddressMap = {
     "YYZ": "6301 Silver Dart Dr, Mississauga, ON L5P 1B2",
     "YKF": "4881 Fountain St N #1, Breslau, ON N0B 1M0",
     "YHM": "9300 Airport Rd #2206, Mount Hope, ON L0R 1W0",
     "YXU": "1750 Crumlin Rd, London, ON N5V 3B6",
     "YGK": "1114 Len Birchall Way, Kingston, ON K7M 9A1",
     "YQG": "3200 County Rd 42 #200, Windsor, ON N8V 0A1",
   }
   if (!isLocal) {
    originAddress = airportAddressMap[origin]
    endAddress = airportAddressMap[origin]
   } else {
     originAddress = origin
     endAddress = endDestination
   }
   for (let i = 0; i < arrayOfUniversities.length; i++) {
     const nameOfUniversity = arrayOfUniversities[i];
    addressArray.push(universityAddressMap[nameOfUniversity])
   }
   const promise = new Promise((resolve) => {
    googleMapsClient.directions({
      origin: originAddress,
      destination: endAddress,
      waypoints: addressArray,
      optimize: true,
    })
    .asPromise()
    .then((res)=> {
      const orderingArray = res.json.routes[0].waypoint_order
      for (let i = 0; i < orderingArray.length; i++) {
        const orderNumber = orderingArray[i];
        orderedUniversityList.push(arrayOfUniversities[orderNumber])
      }
      resolve(orderedUniversityList);
    })
    .catch((err) => console.log(err))
   })

  }
}
