(function onLoad(){
    document.getElementById('searchQuery').addEventListener(
        'input',function(event){
           var searchQuery = event.target.value;
           sendReqToServer(searchQuery);
        });

        function sendReqToServer (searchQuery){
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
             console.log(xhr.responseText);
            }else{
              console.log(xhr);
            }
          }
          xhr.open("GET",window.location.href + "model.js");
          xhr.send();
        };

    }());
