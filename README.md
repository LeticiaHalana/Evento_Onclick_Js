# # ⚡ JavaScript na Prática: Evento Onclick, Funções e Exibição de Resultados

Este repositório contém o material de apoio sobre **Evento Onclick no HTML**, **Funções no JavaScript** e as **3 Formas Clássicas de Exibição de Resultados**.

---

## 📌 Momento Explicativo

### 1. Como Funciona o `onclick`?

O `onclick` é um **gatilho de evento** que conecta uma interação do usuário na página web à execução de uma função no JavaScript.

```text
[ Usuário Clica no Botão ] ──> ( HTML dispara onclick="minhaFuncao()" ) ──> [ JS Executa a Função ]
```

* **No HTML:** Declaramos o atributo `onclick` dentro da tag (ex: `<button>`) informando o nome exato da função acompanhado de parênteses `()`.
* **No JavaScript:** Criamos a função correspondente utilizando a palavra-chave `function`.

> 💡 **Atenção:** Os parênteses `()` no `onclick` são **obrigatórios**! Eles sinalizam ao navegador: *"quando este elemento for clicado, execute a função imediatamente"*.

---

### 2. As 3 Formas de Exibir Resultados

Podemos interagir com o usuário e exibir respostas diretamente pelo JavaScript sem a necessidade inicial de manipular seletores do DOM complexos:

| Método | Tipo | Descrição |
| :--- | :--- | :--- |
| `alert()` | Pop-up de Aviso | Abre uma caixa flutuante nativa do navegador centralizada na tela. Ideal para avisos rápidos. |
| `prompt()` | Caixa de Entrada | Abre uma janela flutuante que solicita uma informação ao usuário e retorna esse dado como string. |
| `document.write()` | Escrita Direta | Escreve diretamente no corpo (*body*) do documento HTML, substituindo o conteúdo atual se executado após o carregamento. |

---

### 3. Injetando Estilos CSS com `document.write()`

É possível injetar tags HTML com estilização CSS inline ou blocos `<style>` completos utilizando a síntaxe de *Template Literals* (crases ``` `` ```):

```javascript
function mostrarResultadoInline(a, b) {
  let soma = a + b;

  document.write(`
    <h1 style="color: #0056b3; font-family: Arial; text-align: center;">
      O resultado da soma é: ${soma}
    </h1>
    <p style="background-color: #eef2f5; padding: 15px; border-radius: 8px; text-align: center;">
      Esta mensagem foi escrita com <strong>CSS inline</strong> via JavaScript!
    </p>
  `);
}
```

---

## 💻 Exemplo Prático da Aula

Abaixo está a estrutura completa do projeto utilizado na demonstração (3 Botões, 3 Formas de Exibição).

### 📄 `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Exibindo Resultados em JS</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <main class="card">
    <h2>Funções e Eventos</h2>
    <p>Escolha como deseja ver o resultado:</p>

    <!-- Exemplo 1: Pop-up simples -->
    <button class="btn btn-azul" onclick="mostrarAlerta(10, 5)">1. Resultado via Alert</button>

    <!-- Exemplo 2: Pergunta + Resultado por Pop-up -->
    <button class="btn btn-verde" onclick="calcularComPrompt()">2. Entrada + Resultado via Prompt</button>

    <!-- Exemplo 3: Escreve direto na tela -->
    <button class="btn btn-roxo" onclick="escreverNaTela(8, 4)">3. Resultado via Document.write</button>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

---

### 🎨 `style.css`

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-align: center;
  width: 320px;
}

.btn {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-azul { background-color: #0056b3; }
.btn-verde { background-color: #28a745; }
.btn-roxo { background-color: #6f42c1; }

.btn:hover { 
  opacity: 0.9; 
}
```

---

### ⚙️ `script.js`

```javascript
// 1. Apresenta o resultado em uma caixa de Alerta
function mostrarAlerta(a, b) {
  let soma = a + b;
  alert(`📢 Resultado da soma (${a} + ${b}): ${soma}`);
}

// 2. Pede dados ao usuário com prompt e exibe com alert
function calcularComPrompt() {
  let valor1 = Number(prompt("Digite o primeiro número:"));
  let valor2 = Number(prompt("Digite o segundo número:"));
  let multiplicacao = valor1 * valor2;

  alert(`🎯 A multiplicação de ${valor1} x ${valor2} é igual a: ${multiplicacao}`);
}

// 3. Escreve o resultado diretamente na página
function escreverNaTela(a, b) {
  let divisao = a / b;
  document.write(`<h1>A divisão de ${a} por ${b} é: ${divisao}</h1>`);
  document.write('<p><a href="">← Voltar para a página inicial</a></p>');
}
```

---

## 🎯 EXERCÍCIOS DE FIXAÇÃO

Crie uma página HTML contendo botões estilizados e implemente as funções JavaScript solicitadas:

### 🟢 Exercício 1: Mensagem Simples com `alert`
* **Objetivo:** Criar um botão com o texto **"Dar Boas-Vindas"**.
* **Ação:** Ao clicar, invoque uma função `darBoasVindas()` que abra uma janela `alert()` exibindo a mensagem: `"Seja bem-vindo ao nosso site de estudos de JavaScript!"`.

---

### 🔵 Exercício 2: Calculadora de Idade com `prompt` e `alert`
* **Objetivo:** Criar um botão **"Calcular Idade"**.
* **Ação:** Ao clicar, invoque a função `calcularIdade()`. Ela deve:
  1. Utilizar `prompt()` para perguntar o **nome** do usuário.
  2. Utilizar outro `prompt()` para perguntar o **ano de nascimento**.
  3. Calcular a idade aproximada (Ano Atual - Ano de Nascimento).
  4. Exibir via `alert()` a mensagem: `"Olá [Nome], você tem (ou vai completar) [Idade] anos este ano!"`.

---

### 🟡 Exercício 3: Gerador de Cartão de Visitas com `document.write`
* **Objetivo:** Criar um botão **"Gerar Cartão"**.
* **Ação:** Ao clicar, chame a função `gerarCartao()`. Ela deve:
  1. Solicitar via `prompt()` o **nome** e a **profissão** do usuário.
  2. Utilizar `document.write()` para reescrever a tela criando uma caixa estilizada contendo:
     * Um título `<h2>` com o nome da pessoa.
     * Um parágrafo `<p>` com a profissão.
     * Um link `<a>` estilizado para recarregar/voltar à página anterior.

---

### 🟣 Exercício 4 (Desafio): Conversor de Moedas
* **Objetivo:** Criar um botão **"Converter R$ para US$"**.
* **Ação:** Crie uma função `converterMoeda()` que:
  1. Peça ao usuário o valor em Reais (`R$`).
  2. Considere a cotação fixa de `$ 1.00 = R$ 5.00$`.
  3. Calcule o valor convertido em Dólares.
  4. Exiba o resultado via `alert()` formatado com 2 casas decimais.

---


🚀 *Bons estudos! Pratique modificando as cores e textos dos exercícios.*
