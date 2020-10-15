function figure(){

  var outputObj = document.getElementById("output");
  outputObj.style.fontSize = "11px";
  outputObj.style.textAlign = "left";

  var n = parseInt(prompt("Please enter a number: ", ""));

  outputObj.innerHTML = "number: " + n + "<br><br>";
  
for (var x = 1; x <= n; x++) {
    for (var k = 1; k <= x; k++) {
      outputObj.innerHTML += "XX ";
      if (k == x) outputObj.innerHTML += "<br>";
    }
  }

  outputObj.innerHTML = outputObj.innerHTML  + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

