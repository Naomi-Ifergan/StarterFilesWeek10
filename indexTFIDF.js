// const portNumber = 4200;
// const app = express(); //make an instance of express
// const server = require("http").createServer(app);
// Pulling our concordance object from a separate "module" - concordance.js
// Load a file for quick testing

const TFIDF = require('TFIDF');
var fs = require('fs');
var content = fs.readFileSync('socialmedia.txt','utf8');
console.log (content);

let tfIDF = new TFIDF();

loadSamples();

function loadSamples() {
    let filenames = ['socialmedia.txt'];
  
    for (let i = 0; i < filenames.length; i++) {
        getTermFreq(filenames[i]);
    }

    for (let i = 0; i < filenames.length; i++) {
        getDocFreq(filenames[i]);
    }

    tfIDF.finish(filenames.length);
    tfIDF.sortByScore();
    tfIDF.logTheDict();
}

  function getDocFreq(filename) {
    let data =  fs.readFileSync('files/' + filename, 'utf8');
     tfIDF.docFreq(data);
 }

  function getTermFreq(filename) {
   let data =  fs.readFileSync('files/' + filename, 'utf8');
    tfIDF.termFreq(data);
}









