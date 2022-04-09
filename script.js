function clicked() {
  let passINPUT = document.getElementById("pass-input");
  let nameINPUT = document.getElementById("name-input");
  const adminPassowrd = "111"; // set admin password
  const adminUsername = "faisal"; // set admin  username

  if ((passINPUT.value == adminPassowrd) & (nameINPUT.value == adminUsername)) {
    // alert("currect");
    location.href = "index.html";
    // parent.open("index.html"); // to open in a new tab
  } else if ((passINPUT.value == "") | (nameINPUT.value == "")) {
    alert("No information entered");
  } else if (
    (passINPUT.value !== adminPassowrd) |
    (nameINPUT.value !== adminUsername)
  ) {
    alert("wrong username or password");
    alert(
      "try username: '" +
        adminUsername +
        "' and password: '" +
        adminPassowrd +
        "'"
    );
  }
}
document.querySelector(".btn").onclick = function () {
  clicked();
};

const hideThePass = document.getElementById("hide");
const showThePASS = document.getElementById("show");

hideThePass.style.visibility = "hidden";
showThePASS.style.visibility = "visible";

function showPASS() {
  const pass = document.querySelector("#pass-input");
  if (pass.value !== "") {
    hideThePass.style.visibility = "visible";
    showThePASS.style.visibility = "hidden";
    pass.setAttribute("type", "text");
  } else {
    alert("There is no password to show");
  }
}
function hidePASS() {
  const pass = document.querySelector("#pass-input");
  hideThePass.style.visibility = "hidden";
  showThePASS.style.visibility = "visible";
  pass.setAttribute("type", "password");
}
