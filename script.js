
function clearScreen() {
  document.getElementById("result").value = "";
}

function liveScreen(value) {
  document.getElementById("result").value += value;
}

function evaluation(){
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}