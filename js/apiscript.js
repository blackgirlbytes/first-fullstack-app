document.getElementById("clickMe").onclick = makeReq;

function makeReq(){

  var companyName = document.getElementById("companyName").value;

  var request = new XMLHttpRequest();
  request.open('GET', '/api?company='+companyName, true);

  request.onload = function() {
      console.log("this still works")
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        console.log(data)
        document.getElementById("companyLocation").innerHTML = data.location
        document.getElementById("companyIndustry").innerHTML = data.industry
        document.getElementById("companyType").innerHTML = data.type

      } else {
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
}
