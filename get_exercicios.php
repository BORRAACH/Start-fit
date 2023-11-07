<?php

$conexao = mysqli_connect('localhost', 'root', '', 'maromba_etec');

header('Access-Control-Allow-Origin: *');

if (!$conexao) {
    die('Erro na conexão com o MySQL: ' . mysqli_connect_error());
}

$query = "SELECT * FROM exercicios";
$resultado = mysqli_query($conexao, $query);

if (!$resultado) {
    die('Erro na consulta: ' . mysqli_error($conexao));
}

$exercicios = mysqli_fetch_all($resultado, MYSQLI_ASSOC);
$jsonExercicios = json_encode($exercicios);

echo $jsonExercicios;
?>