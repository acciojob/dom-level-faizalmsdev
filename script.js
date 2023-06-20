//your JS code here. If required.
window.onload = function() {
  var element = document.getElementById("level");
  var level = 0;

  while (element.parentElement) {
    element = element.parentElement;
    level++;
  }

  var message = "The level of the element is: " + level;
  alert(message);
};
