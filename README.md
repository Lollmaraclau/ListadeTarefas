# ListadeTarefas
#Objetivo:ajudar as pessoas a se organizerem
Cronograma e Desenvlovimento:
Primeriro Dia:
Configuração do repositório.
Estrutura inicial do projeto
Segundo Dia:
Implementar funcionalidades básicas: adicionar, listar, excluir tarefas.
Criar a interface visua
Terceiro Dia:
Adicionar a marcação de tarefas concluídas
Quarto Dia:
Revisar,testar e realizar ajustes


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lista de Tarefas</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Minha Lista de Tarefas</h1>
  <form id="task-form">
    <input type="text" id="task-input" placeholder="Nova tarefa" required>
    <button type="submit">Adicionar</button>
  </form>
  <ul id="task-list"></ul>
  <script src="script.js"></script>
</body>
</html>
