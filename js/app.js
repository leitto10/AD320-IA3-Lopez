var taskInput = document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

var aler = document.getElementById("displayAlert").addEventListener("click", function() {
  alert("Hello there, how are you doing today?");
});

function mOver(obj) {
  obj.innerHTML = '<h1>Thank You, you are Amazing!</h1>'
}

function mOut(obj) {
  obj.innerHTML = '<h1>Mouse Over Me</h1>'
}

var over = document.getElementById("fourth").addEventListener("mousemove", myFunction);

function myFunction() {
  document.getElementById("demi").innerHTML = Math.random();
}

function removeHandler() {
  document.getElementById("fourth").removeEventListener("mousemove", myFunction);
}

