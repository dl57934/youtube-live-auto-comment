const inputBox = document.getElementById("input");
const inputBoxElements = inputBox.getElementsByTagName("div");

let inputTag;

for (let i = 0; i < inputBoxElements.length; i++) {
  if (inputBoxElements[i].id == "input") {
    inputTag = inputBoxElements[i];
    break;
  }
}

inputTag.innerText = "test2";

const buttonBox = document.getElementById("send-button");
const buttonElement = buttonBox.getElementsByTagName("button");
buttonElement[0].click();
