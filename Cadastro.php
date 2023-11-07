<?php
header("Access-Control-Allow-Origin: *");

// REQUISIÇÃO POST
$conexao = mysqli_connect('localhost', 'root', '') or die("Erro na conexão com o MySQL: " . mysqli_connect_error());

mysqli_select_db($conexao, 'maromba_etec') or die("Erro na seleção do Banco: " . mysqli_error());

// Recebe o corpo da requisição
$json = file_get_contents('php://input');

// Converte o JSON em um array associativo
$data = json_decode($json, true);

// Verifica se os dados foram recebidos corretamente
if (isset($data['nome'], $data['email'], $data['senha'])) {
    $nome = $data['nome'];
    $email = $data['email'];
    $senha = $data['senha'];

    // Verificar se o e-mail já existe
    $check_email = mysqli_query($conexao, "SELECT * FROM usuario WHERE email='$email'");
    if (mysqli_num_rows($check_email) > 0) {
        echo 'Este e-mail já está cadastrado.';
    } else {
        // Usar prepared statement para evitar injeção de SQL
        $stmt = $conexao->prepare("INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $nome, $email, $senha);
        $stmt->execute();
        $stmt->close();

        echo 'Usuário cadastrado com sucesso.';
    }
} else {
    echo 'Dados inválidos. Certifique-se de enviar nome, email e senha no corpo da requisição.';
}

mysqli_close($conexao);
?>