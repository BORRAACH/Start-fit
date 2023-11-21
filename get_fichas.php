<?php
session_start();

$conexao = mysqli_connect('localhost', 'root', '')
    or die("Erro na conexão com o MySQL: " . mysqli_connect_error());

mysqli_select_db($conexao, 'maromba_etec')
    or die("Erro na seleção do Banco: " . mysqli_error());

// -----------------

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

$json = file_get_contents('php://input');
$iduser = json_decode($json, true);

$resultado = mysqli_query($conexao, 
    "SELECT e.id as e_id, e.nome, f.nome_ficha, f.id as f_id 
    FROM g5_exercicios as e 
    JOIN g5_ficha_exercicio as f_e on e.id = f_e.id_exerc 
    JOIN g5_ficha as f on f.id = f_e.id_g5_ficha
    JOIN g5_usuario on f.id_g5_usuario = $iduser")
or die('Erro na busca exercicio e ficha: ' . mysqli_error());

$registros = mysqli_fetch_all($resultado, MYSQLI_ASSOC);

echo json_encode($registros);

?>