document.getElementById("TaskInput").placeholder = "Type Your Task Here...";
document.getElementById("AddTaskBtn").addEventListener("click", () => {
  //Get input value
  let inputValue = document.getElementById("TaskInput").value;

  if (inputValue.length == 0) {
    alert("Please Type A Task!");
  } else if (inputValue.length > 0) {
    //Create li
    let newLi = document.createElement("li");
    newLi.innerHTML = inputValue;
    newLi.className = "NewLi";
    let createX = document.createElement("span");
    createX.innerHTML = "x";
    createX.className = "CloseBTN";
    newLi.appendChild(createX);
    document.getElementById("LiContainer").appendChild(newLi);
    //Clear Li
    let clearLi = document.querySelectorAll(".CloseBTN");
    for (i = 0; i < clearLi.length; i++) {
      clearLi[i].onclick = function () {
        let thisLi = this.parentElement;
        thisLi.remove();
      };
    }
  }
});

// Add a "checked" symbol when clicking on a list item
let getUl = document.querySelector("ul");
getUl.addEventListener("click", (item) => {
  if (item.target.tagName === "LI") {
    item.target.classList.toggle("checkedLi");
  }
});
