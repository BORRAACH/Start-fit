<?php
session_start();

$conexao = mysqli_connect('localhost', 'root', '')
    or die("Erro na conexão com o MySQL: " . mysqli_connect_error());

mysqli_select_db($conexao, 'maromba_etec')
    or die("Erro na seleção do Banco: " . mysqli_error());

// -----------------

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Verificar se 'idUser' está definido antes de usá-lo
if (isset($data[0]['idUser'])) {
    $iduser = intval($data[0]['idUser']);
    $nomeFicha = $data[0]['nomeFicha'];

    mysqli_query($conexao, "INSERT INTO g5_ficha (id_g5_usuario, nome_ficha) VALUES ($iduser, '$nomeFicha')")
        or die('Erro na criação de ficha: ' . mysqli_error($conexao));

    $idficha = mysqli_insert_id($conexao); // Obtém o ID da ficha inserida

    foreach ($data as $exercicio) {
        $idexercicio = intval($exercicio['id']);

        mysqli_query($conexao, "INSERT INTO g5_ficha_exercicio (id_g5_ficha, id_exerc) VALUES ($idficha, $idexercicio)")
            or die('Erro na inserção de exercício: ' . mysqli_error($conexao));
    }
} else {
    // Tratar o caso em que 'idUser' não está definido
    echo 'Erro: A chave "idUser" não está definida no JSON recebido.' . $json;
}
?>