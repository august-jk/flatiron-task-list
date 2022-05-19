document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    createTask(e.target.new_task_description.value);
    form.reset()
  })
});

function createTask(task){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', deleteTask);
  btn.textContent = 'X';
  p.textContent = `${task} `;
  p.appendChild(btn);
  document.querySelector('#list').appendChild(p);
}

function deleteTask(e) {
  e.target.parentNode.remove()
}