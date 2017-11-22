// <script src="http://en.wikipedia.org/w/api.php?action=opensearch&limit=10&format=json&callback=getData&search="></script>
//
//
// <input type="text" id="searchbox">
// <div id="output"></div>
//this part will go to html file later

function getData(data) {
  document.getElementById('output').innerHTML = data;
}


var myScript = '';
document.getElementById('searchbox').onkeyup = function(){
  var searchText = document.getElementById('searchbox').value;
  myScript = document.createElement('script');
  myScript.src = "https://www.mediawiki.org/w/api.php?action=opensearch&search=" + searchText;

document.body.appendChild(myScript);
};
