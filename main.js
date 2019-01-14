const request = require('request');
const cheerio = require('cheerio');


request('https://www.wenku8.net/modules/article/reader.php?aid=2084&cid=74366', function(error, response, body){
    let $ = cheerio.load(body);
    console.log($('#content').text());
});
