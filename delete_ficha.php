<?php
session_start();

$conexao = mysqli_connect('localhost', 'root', '')
    or die("Erro na conexão com o MySQL: " . mysqli_connect_error());

mysqli_select_db($conexao, 'maromba_etec')
    or die("Erro na seleção do Banco: " . mysqli_error());

// -----------------

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

$idficha = $_GET['id'];

var_dump($idficha);


mysqli_query($conexao, "DELETE FROM g5_ficha WHERE id = '$idficha'");

?>