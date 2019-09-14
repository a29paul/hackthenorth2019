const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;
const credentials = new CognitiveServicesCredentials('fa6bd1bf70114ea480af6726fce37972');

const NewsSearchAPIClient = require('azure-cognitiveservices-newssearch');
const client = new NewsSearchAPIClient(credentials);

module.exports = {
  newsInfo: function newsInfo(searchTerm){
    client.newsOperations.search(searchTerm).then((result) => {
        const links = result.value
        let articleArray = [];
        for (let i = 0; i < 5; i++) {
            const link = links[i];
            articleArray.push([link.name, link.url])
        }
         console.log(articleArray)
    }).catch((err) => {
        throw err;
    });
 }
}
