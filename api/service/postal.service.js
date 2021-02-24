const fetch = require('node-fetch');

const apiKey = process.env.ZIPCODE_API_KEY || "nJqkMyLbDY2ALHRtg6exw8T0wxX2i1BgGdLc9fs4wdnYBCCynAWHoZxs3py6dG9I";
const zipCodeURL = 'https://www.zipcodeapi.com/rest/';

const distance = (request, response, next) => {

    const url = zipCodeURL + apiKey + '/distance.json/' + request.params.zipcode1 + '/' + request.params.zipcode2 + '/mile';

    fetch(url)
        .then(res => res.json())
        .then(json => {
            response.send(json);
        })
}

module.exports.distance = distance;