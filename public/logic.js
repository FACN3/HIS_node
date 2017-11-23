(function onLoad() {
  document.getElementById('searchQuery').addEventListener(
    'input', function (event) {
      var searchQuery = event.target.value;
      sendReqToServer(searchQuery, apiCallback);
    });

  function apiCallback(apiResults) {
    var ulElement = document.getElementById('searchResult');
    apiResults.forEach(function (apiResult) {
      var listElement = document.createElement('li');
      var linkElement = document.createElement('a');
      var linkName = document.createTextNode(apiResult.title);
      linkElement.href = apiResult.link;
      linkElement.appendChild(linkName);
      listElement.appendChild(linkElement);
      ulElement.appendChild(listElement);
    });
  }

  function sendReqToServer(searchQuery, apiCallback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        apiCallback(JSON.parse(xhr.responseText));
      }
    }
    xhr.open("GET", window.location.href + "model?q=" +searchQuery);
    xhr.send();
  };

}());
