const quackSwitch = window.getElementById("switch");

quackSwitch.addEventListener("change", function (e) {
  if (quackSwitch.checked) alert("Checked");
  if (!quackSwitch.checked) alert("Not Checked");
});
