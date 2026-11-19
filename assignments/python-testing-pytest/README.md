# 📘 Atividade: Testando Código Python com pytest

## 🎯 Objetivo

Aprenda a escrever e executar testes automatizados com `pytest`, verificando o comportamento das funções e identificando erros antes que eles cheguem aos usuários.

Antes de começar, instale a biblioteca com `pip install pytest` e execute os testes com `pytest -v` a partir da pasta da atividade.

## 📝 Tarefas

### 🛠️ Escrever o Primeiro Teste

#### Descrição
Crie um arquivo `test_calculadora.py` na mesma pasta e escreva testes para a função `somar`. Para importá-la, renomeie `starter-code.py` para `calculadora.py` e use `from calculadora import somar`.

#### Requisitos
O programa concluído deve:

- Criar pelo menos três funções de teste começando com `test_`
- Usar `assert` para comparar o resultado de `somar` com o valor esperado
- Incluir casos com números positivos, negativos e zero
- Executar `pytest -v` e ver todos os testes passarem


### 🛠️ Testar Casos de Erro

#### Descrição
A função `dividir` deve lançar `ZeroDivisionError` quando o divisor for zero. Escreva testes que confirmem esse comportamento.

#### Requisitos
O programa completo deve:

- Testar um resultado correto de `dividir`, como `dividir(10, 2)`
- Usar `pytest.raises(ZeroDivisionError)` para verificar a divisão por zero
- Garantir que o teste passe quando a exceção for lançada e falhe quando não for


### 🛠️ Testar Vários Casos com Parametrização

#### Descrição
A função `is_palindrome` deve dizer se um texto é um palíndromo, ignorando maiúsculas e espaços. Use `@pytest.mark.parametrize` para testar vários casos com um único teste.

#### Requisitos
O programa completo deve:

- Usar `@pytest.mark.parametrize` com pelo menos cinco combinações de texto e resultado esperado
- Incluir casos verdadeiros, como `"Ana"` e `"Socorram me subi no onibus em Marrocos"`, e falsos, como `"Python"`
- Verificar que a função ignora maiúsculas e espaços
- Executar `pytest -v` e confirmar que cada combinação aparece como um teste separado
