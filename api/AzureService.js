const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;
const credentials = new CognitiveServicesCredentials('1aad692bbee14357afd6d13321fd76a7');

const NewsSearchAPIClient = require('azure-cognitiveservices-newssearch');
const client = new NewsSearchAPIClient(credentials);

module.exports = {
  newsInfo: function newsInfo(searchTerm){
    const promise = new Promise((resolve) => {
        client.newsOperations.search(searchTerm).then((result) => {
            const links = result.value
            let articleArray = [];
            for (let i = 0; i < 5; i++) {
                const link = links[i];
                articleArray.push([link.name, link.url])
            }
            resolve(articleArray);
        }).catch((err) => {
            throw err;
        });
    })
    return promise;
 }
}
