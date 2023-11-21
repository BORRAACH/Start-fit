<?php

// Conexão com o banco de dados (substitua os valores conforme necessário)
$conexao = mysqli_connect('localhost', 'root', '', 'maromba_etec')
    or die('Erro na conexão com o MySQL: ' . mysqli_connect_error($conexao));

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');


$json = file_get_contents('php://input');

$data = json_decode($json, true);

if (isset($data['email'], $data['senha'])) {  
    $email = $data['email'];
    $senha = $data['senha'];

    $sql = "SELECT * FROM g5_usuario WHERE email='$email'";
    $resultado = mysqli_query($conexao, $sql);

    if ($resultado) {
        if (mysqli_num_rows($resultado) == 1) {
            $user = mysqli_fetch_array($resultado);     

            if ($senha == $user['senha']) {
                session_id($user['id']);
                session_start();
                echo json_encode(true);
            } else {
                echo json_encode(false);
                error_log("Senha incorreta para o usuário com email: $email");
            }
        } else {
            echo json_encode(false);
            error_log("Usuário não encontrado com email: $email");
        }
    } else {
        echo json_encode(false);
        error_log("Erro na consulta SQL: " . mysqli_error($conexao));
    }
} else {
    echo json_encode(false);
    error_log("Dados do formulário não fornecidos corretamente");
}

mysqli_close($conexao);

?>