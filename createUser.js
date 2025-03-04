import { addPerson } from "./Requests/POST.js";

const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", createPerson);

function createPerson() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const location = document.getElementById("location").value;
  const haircolor = document.getElementById("haircolor").value;
  const isStudent = document.getElementById("isStudent").checked;

  const newPerson = [
    {
      name: name,
      age: parseInt(age),
      location: location,
      haircolor: haircolor,
      isStudent: isStudent,
    },
  ];

  addPerson(newPerson);
}
