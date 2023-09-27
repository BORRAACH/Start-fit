<?php

    $conexao = mysqli_connect('localhost', 'root', '')
        or die("Erro na conexão com o MySQL: " . mysqli_connect_error());

        // Receber os dados do JavaScript
        $data = json_decode(file_get_contents("php://input"), true);


        $nome  = $conexao->real_escape_string($data["username"]);
        $senha = $conexao->real_escape_string($data["password"]);
        $email = $conexao->real_escape_string($data["email"]);


        // Entrando no BD
    mysqli_select_db($conexao, 'Maromba_Etec')
        or die("Erro na seleção do Banco: " . mysqli_error());
    // ----------------------------------------------------------- //


    if($nome and $email and $senha){

        mysqli_query($conexao, 
        "INSERT INTO Usuario VALUE
        (DEFAULT, '$nome', '$email', '$senha')") 
        or die('Erro na Inserção de dados: ' . mysqli_error());

        echo 'Dados inseridos com sucesso';

    }else{

        echo 'É preciso preencher todas as caixas';

    }

?>