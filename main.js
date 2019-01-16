const request = require('request');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');

let options = {
    url: 'https://www.wenku8.net/modules/article/reader.php?aid=2084&cid=74366',
    encoding: null,
};

request(options, function(error, response, body){
    let html = iconv.decode(body, 'gbk');
    processHtml(html);
});

function processHtml(responseBody){
    let $ = cheerio.load(responseBody, {decodeEntities: false});
    console.log($('#content').html());
}