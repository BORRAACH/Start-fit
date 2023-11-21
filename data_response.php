<?php 
$connection = mysqli_connect('localhost', 'root', '', 'maromba_etec');

header('Access-Control-Allow-Origin: *');

$dataUsers = mysqli_query($connection, 
    "SELECT email, senha FROM g5_usuario")
    or die('Erro na Inserção de dados: ' . mysqli_error());

// Array para armazenar os dados
$dados = array();

while($registro = mysqli_fetch_array($dataUsers)){
  $email = $registro['email'];
  $senha = $registro['senha'];

  // Adiciona os dados ao array
  $dados[] = array('email' => $email, 'senha' => $senha);
}

// Converte para JSON
$dataUsers = json_encode($dados);

// Imprime o JSON
echo $dataUsers;
?>