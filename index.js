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
  document.write(`

    <h1 style="color: blue; font-size: 32px; text-align: center">A divisão de ${a} por ${b} é: ${divisao}</h1>
    `);
  document.write('<p><a href="">← Voltar para a página inicial</a></p>');
}