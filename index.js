const usersInput = document.querySelector("#usersInput");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

console.log(usersInput);

function createTask() {
  const newItem = document.createElement("li");
  newItem.textContent = usersInput.value;
  list.append(newItem);
  usersInput.value = "";
}

document.querySelector("#btn").onclick = createTask;

list.addEventListener("click", function (evt) {
  if (evt.target.tagName === "LI") {
    evt.target.classList.toggle("active");
  }
});
