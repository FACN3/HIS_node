const getData = (searchQuery, callback) => {
    searchQuery = searchQuery.split('=')[1];
    const url = "https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&search=" + searchQuery;
    const request = require('request');

    request(url,  (error, response, body) => {
        /* istanbul ignore if  */
        if(error){
            return callback('error' ,error);
        }
        var parsedData = JSON.parse(body);
        const array = Array.from({length:10}, (el, index) => {
            return {
              title: parsedData[1][index],
              link: parsedData[3][index]
            };
          });
        return callback(null ,array);
    });
};

module.exports = getData;