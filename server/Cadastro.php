<?php

// REQUISIÇÂO GET
if(!isset($_POST['botao'])){
    include "./views/forms.php";
    return;
}    


// REQUISIÇÃO POST
$conexao = mysqli_connect('localhost', 'root', '')
    or die("Erro na conexão com o MySQL: " . mysqli_connect_error());

mysqli_select_db($conexao, 'maromba_etec')
    or die("Erro na seleção do Banco: " . mysqli_error());


$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];
    

if($nome and $email and $senha){

    mysqli_query($conexao, 
    "INSERT INTO usuario VALUE
    (DEFAULT, '$nome', '$email', '$senha')") 
    or die('Erro na Inserção de dados: ' . mysqli_error());

    header("Location: login.php"); 

}else{

    header("Location: login.php");
    echo 'É preciso preencher todas as caixas';

}
 

?>