document.getElementById('task-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Criar elemento da tarefa
  const li = document.createElement('li');
  li.textContent = taskInput.value;
  li.className = 'task';

  // Botão para marcar como concluído
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Concluir';
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed'); // Adiciona ou remove a classe 'completed'
  });

  // Botão para remover tarefa
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Excluir';
  deleteBtn.addEventListener('click', () => li.remove());

  // Adicionar botões à tarefa
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  // Adicionar tarefa à lista
  taskList.appendChild(li);

  taskInput.value = ''; // Limpar o campo de entrada
});