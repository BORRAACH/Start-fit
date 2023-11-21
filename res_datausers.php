<?php 
  header('Access-Control-Allow-Origin: *');

  $connection = mysqli_connect('localhost', 'root', '') 
                or die("Erro na conexão com o MySQL: " . mysqli_connect_error());
  
  mysqli_select_db($connection, 'maromba_etec')
                or die("Erro na seleção do Banco: " . mysqli_error($connection));

  $dataUsers = mysqli_query($connection, 
    "SELECT nome, email, senha FROM g5_usuario")
    or die('Erro na Inserção de dados: ' . mysqli_error($connection));

    $data = array();

    while($registro = mysqli_fetch_array($dataUsers)){
      $nome = $registro['nome'];
      $email = $registro['email'];
      $senha = $registro['senha'];
    
      $data[] = array('email' => $email, 'senha' => $senha);
    };

    $dataUsers = json_encode($data);

    echo $dataUsers;
?>