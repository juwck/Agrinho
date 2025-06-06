//Gráfico com dados
const ctx = document.getElementById('graficoProducao').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Soja', 'Milho', 'Leite', 'Café', 'Frutas'],
    datasets: [{
      label: 'Produção (milhões de toneladas)',
      data: [120, 90, 30, 25, 20],
      backgroundColor: ['#4b6043', '#658354', '#87ab69', '#a3c585', '#c7ddb5']
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// QUIZ INTERATIVO
const perguntas = [
  { texto: "Mais de 70% dos alimentos no Brasil vêm da agricultura familiar.", resposta: true },
  { texto: "O campo não influencia a economia urbana.", resposta: false },
  { texto: "O transporte rural afeta o preço dos alimentos nas cidades.", resposta: true }
];

let atual = 0;

function mostrarPergunta() {
  const pergunta = perguntas[atual];
  document.getElementById("pergunta").innerText = pergunta.texto;
  document.getElementById("resultado").innerText = "";
}

function responder(valor) {
  const correta = perguntas[atual].resposta === valor;
  document.getElementById("resultado").innerText = correta ? "✅ Acertou!" : "❌ Errou!";
  atual = (atual + 1) % perguntas.length;
  setTimeout(mostrarPergunta, 2000);
}

mostrarPergunta();
  