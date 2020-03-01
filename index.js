function autoCommentWrite() {
  let inputTag = $("#input > #input");
  inputTag.innerText = "test2";
  console.log("work");
  setTimeout(function() {
    let buttonBox = document.getElementById("send-button");
    let buttonElement = buttonBox.getElementsByTagName("button");
    buttonElement[0].click();
    clearTimeout();
  }, 2000);
}

setTimeout(autoCommentWrite(), 3000);
