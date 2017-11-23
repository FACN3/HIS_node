function getData(searchQuery, callback) {
    searchQuery = searchQuery.split('=')[1];
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&search=" + searchQuery;
    const request = require('request');

    request(url, function (error, response, body) {
        if(error){
            return callback('error' ,error);
        }
        var parsedData = JSON.parse(body);
        // var array = [];
        // for (var i = 0; i < 10; i++) {
        //     var object = {
        //         title: parsedData[1][i],
        //         link: parsedData[3][i]
        //     };
        //     array.push(object);
        // }
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