// alert("try")

let input = document.getElementById("inpBox");
let buttons = document.querySelectorAll('button');

let string = "";
var arr = Array.from(buttons);
arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      input.value = string;
    }
    else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    }
    else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    }
    else {
      string += e.target.innerHTML;
      input.value = string;
    }
    return e.target.innerHTML;
  })

})






function myButtonClick() {

  var buttons = document.getElementsByClassName("onPressed");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("onPressed");
  }


  this.classList.add("onPressed");

  console.log("Button clicked!");
}
var buttons2 = document.getElementsByTagName("button");


for (var i = 0; i < buttons2.length; i++) {
  buttons2[i].addEventListener("click", myButtonClick);
}
























