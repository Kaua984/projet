window.onload = () => {
  const challengeText = localStorage.getItem('challenge') || 'Desafio não encontrado.';
  document.getElementById('challenge-text').innerText = challengeText;
};


function validateAnswer() {
  const userAnswer = document.getElementById('user-answer').value.trim().toLowerCase();
  const challenge = localStorage.getItem('challenge');

  let correct = false;

  switch (challenge) {
    case 'Qual letra minúscula combina com a maiúscula A?':
      correct = userAnswer === 'a';
      break;
    case 'As letras p e q são as mesmas?':
      correct = userAnswer === 'nao' || userAnswer === "não";
      break;
    case 'Qual é a letra que vem depois do M?':
      correct = userAnswer === 'N' || userAnswer === 'n';
      break;
    case 'Qual é o par correto para a letra maiúscula T?':
      correct = userAnswer === 't';
      break;
    case 'Qual a letra que falta para a seguinte palavra: _ueijo':
      correct = userAnswer === 'Q' || userAnswer === 'q';
      break;
    default:
      correct = false;
  }

  const feedback = document.getElementById('feedback');
  if (correct) {
    feedback.innerText = 'Resposta correta! Voltando ao jogo...';
    localStorage.removeItem('challenge');
    localStorage.setItem('errors', '0');

    setTimeout(() => {
      window.location.href = 'game.html';
    }, 1500);
  } else {
    feedback.innerText = 'Resposta incorreta! Tente novamente.';
  }
}
