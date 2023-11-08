<?php

// Conexão com o banco de dados (substitua os valores conforme necessário)
$conexao = mysqli_connect('localhost', 'root', '', 'maromba_etec')
        or die('Erro na conexão com o MySQL: ' . mysqli_connect_error($conexao));

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: Content-Type');

$json = file_get_contents('php://input');

// Converte o JSON em um array associativo
$data = json_decode($json, true);

// Verifica se os dados do formulário foram enviados corretamente
if (isset($data['email'], $data['senha'])){    // Recebe os dados do formulário
    $email = $data['email'];
    $senha = $data['senha'];

    // Consulta o banco de dados para verificar se o usuário existe
    $sql = "SELECT * FROM usuario WHERE email='$email' AND senha='$senha'";
    $resultado = mysqli_query($conexao, $sql);

    // Verifica se a consulta foi bem-sucedida
    if ($resultado) {
        // Verifica se encontrou um usuário correspondente
        if (mysqli_num_rows($resultado) == 1) {
            // Autenticação bem-sucedida
            echo json_encode(true);
        } else {
            // Usuário não encontrado ou senha incorreta
            echo json_encode(false);
        }
    } else {
        // Erro na consulta
        echo json_encode(false);
    }
} else {
    echo 'otario';
    echo json_encode(false);
}

// Fecha a conexão com o banco de dados
mysqli_close($conexao);

?>