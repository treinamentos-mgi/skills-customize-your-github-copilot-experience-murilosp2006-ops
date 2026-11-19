# 📘 Atividade: Construindo APIs REST com FastAPI

## 🎯 Objetivo

Aprenda a criar uma API REST com FastAPI, definindo rotas, validando dados com Pydantic e retornando códigos de status HTTP adequados.

Antes de começar, instale a biblioteca com `pip install fastapi uvicorn` e execute a aplicação com `uvicorn main:app --reload`.

## 📝 Tarefas

### 🛠️ Criar a Aplicação e a Primeira Rota

#### Descrição
Abra o arquivo `starter-code.py`, renomeie-o para `main.py` e crie uma rota que responda a requisições `GET /` com uma mensagem de boas-vindas.

#### Requisitos
O programa concluído deve:

- Criar uma instância de `FastAPI` chamada `app`
- Definir a rota `GET /` que retorne um JSON com a chave `message`
- Executar a aplicação com `uvicorn` e acessar `http://127.0.0.1:8000/` no navegador


### 🛠️ Criar um Modelo e Rotas de Tarefas

#### Descrição
Crie uma API para gerenciar uma lista de tarefas guardada em memória. Use um modelo Pydantic para validar os dados recebidos.

#### Requisitos
O programa completo deve:

- Definir um modelo `Task` com os campos `id` (inteiro), `title` (texto) e `done` (booleano, padrão `False`)
- Criar a rota `POST /tasks` para adicionar uma tarefa e retornar a tarefa criada
- Criar a rota `GET /tasks` para listar todas as tarefas
- Criar a rota `GET /tasks/{task_id}` para buscar uma tarefa pelo `id`


### 🛠️ Atualizar, Remover e Tratar Erros

#### Descrição
Complete o CRUD de tarefas e trate os casos em que a tarefa não existe.

#### Requisitos
O programa completo deve:

- Criar a rota `PUT /tasks/{task_id}` para atualizar uma tarefa existente
- Criar a rota `DELETE /tasks/{task_id}` para remover uma tarefa
- Retornar status `404` quando a tarefa não for encontrada, usando `HTTPException`
- Retornar status `201` na criação e `204` na remoção
- Acessar `http://127.0.0.1:8000/docs` e testar cada rota pela documentação automática do FastAPI
