<?php

    // CONEXÃO COM O BANCO DE DADOS
    $conexao = mysqli_connect('localhost', 'root', '')
    or die('Erro na conexão com o Banco: ' . mysqli_connect_error());


    mysqli_select_db($conexao, "Maromba_Etec")
    or die('bla bla bla erro: ' . mysqli_error($conexao));

    mysqli_query($conexao, "DROP DATABASE Maromba_Etec;")
    or die('bla bla bla erro: ' . mysqli_error());

?>