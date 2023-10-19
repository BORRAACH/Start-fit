<?php

if(!isset($_POST['botao'])){
    
    include "./views/login.php";
    return;
}

$conexao = mysqli_connect('localhost', 'root', '')
or die("Erro na conexão com o MySQL: " . mysqli_connect_error());

mysqli_select_db($conexao, 'maromba_etec')
or die("Erro na seleção do Banco: " . mysqli_error());

$email = $_POST['email'];
$senha = $_POST['senha'];

// ---------------------------------

$user = mysqli_query($conexao,
    "SELECT * FROM usuario 
    WHERE email = '$email' AND senha = '$senha'")
    or die ('Erro na seleção de campo: ' . mysqli_error());

if(mysqli_num_rows($user) != 1){
    $error = 'mt burro n foi kkkkkkk';

    include "./views/login.php";
    return;
}

$userRegistro = mysqli_fetch_array($user);

session_id($userRegistro['id']);
session_start();

$_SESSION['id'] = $userRegistro['id'];

include "login_p2.php";