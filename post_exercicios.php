<?php 

$conexao = mysqli_connect('localhost', 'root', '', 'maromba_etec');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Verifique se o método de requisição é POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verifique se 'valorDoInput' foi enviado
    if (isset($_POST['valorDoInput'])) {
        $valorDoInput = $_POST['valorDoInput'];

        // Prepara a consulta para inserir na tabela 'exercicios'
        $query = "INSERT INTO g5_exercicios (id, nome, categoria) VALUES (DEFAULT, '$valorDoInput', 'valorDaCategoria')";

        // Executa a consulta
        if (mysqli_query($conexao, $query)) {
            echo 'Dados inseridos com sucesso na tabela exercicios.';
        } else {
            echo 'Erro ao inserir dados na tabela exercicios: ' . mysqli_error($conexao);
        }
    } else {
        echo 'O campo "valorDoInput" não foi enviado na requisição.';
    }
} else {
    echo 'Método de requisição inválido. Apenas POST é permitido.';
}

?>