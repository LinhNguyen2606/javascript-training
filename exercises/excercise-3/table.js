const insertTask = () => {
  const taskNameInput = document.getElementById("task-name");
  const pomodoriCountSelect = document.getElementById("pomodoro-count");
  let pomodoriDefaultValue = 0;

  const taskNameValue = taskNameInput.value;
  const pomodoriCountValue = +pomodoriCountSelect.value;

  const tbodyElement = document.querySelector(".tbody-pomodori");

  const existingTasks = Array.from(tbodyElement.rows).find(function (row) {
    return row.cells[0].textContent === taskNameValue;
  });

  if (!taskNameValue || !pomodoriCountValue) {
    alert("Please fill in all the fields.");
    return;
  } else if (existingTasks) {
    alert("Task name already exists in the table!");
    return;
  }

  const newRow = tbodyElement.insertRow(0);

  const taskNameCell = newRow.insertCell(0);
  const statusCell = newRow.insertCell(1);
  const controlCell = newRow.insertCell(2);

  taskNameCell.textContent = `${taskNameValue}`;
  statusCell.textContent = `${pomodoriDefaultValue} / ${pomodoriCountValue}`;
  controlCell.innerHTML = `
      <button class="done-button">Done</button>
      <button class="increase-button">Increase Pomodoro Count</button>
      <button class="delete-button">Delete Task</button>
    `;

  const doneBtnElement = document.querySelector(".done-button");
  doneBtnElement.addEventListener("click", () => {
    controlCell.textContent = "Finished";
    controlCell.innerHTML += `
        <button class="delete-btn">Delete Task</button>
      `;

    const deleteBtnElement = document.querySelector(".delete-btn");
    deleteBtnElement.addEventListener("click", () => {
      newRow.remove();
    });
  });

  const increaseBtnElement = document.querySelector(".increase-button");
  increaseBtnElement.addEventListener("click", () => {
    if (pomodoriDefaultValue < pomodoriCountValue) {
      pomodoriDefaultValue++;
      statusCell.textContent = `${pomodoriDefaultValue} / ${pomodoriCountValue}`;
    } else {
      alert("Pomodoro count cannot exceed the specified count.");
    }
  });

  const deleteButtonElement = document.querySelector(".delete-button");
  deleteButtonElement.addEventListener("click", () => {
    newRow.remove();
  });

  taskNameInput.value = "";
  pomodoriCountSelect.value = 1;
};

const addButton = document.querySelector("button");
addButton.onclick = insertTask;
