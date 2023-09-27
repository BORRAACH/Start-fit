document.querySelector('#submitBtn').addEventListener('click', function () {
  const username = document.querySelector('#nome').value;
  const password = document.querySelector('#senha').value;
  const email = document.querySelector('#email').value;

  const mensagemDiv = document.querySelector('#resultado');

  // Validação do formato do e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    mensagemDiv.textContent = 'Por favor, insira um endereço de e-mail válido.';
    return;
  }

  // Dados
  const dataToSend = {
    username: username,
    password: password,
    email: email,
  };

  // Enviando dados ao PHP
  fetch('cadastro.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToSend),
  })
    .then((response) => response.text())
    .then((responseText) => {
      mensagemDiv.textContent = responseText; // Resposta do PHP
      console.log(responseText); // Resposta do PHP
    })
    .catch((error) => {
      console.error('Erro ao enviar os dados:', error);
    });
});
