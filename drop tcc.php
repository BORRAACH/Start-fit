<?php

    // CONEXÃO COM O BANCO DE DADOS
    $conexao = mysqli_connect('localhost', 'root', '')
    or die('Erro na conexão com o Banco: ' . mysqli_connect_error());


    mysqli_select_db($conexao, "maromba_etec")
    or die('bla bla bla erro: ' . mysqli_error($conexao));

    mysqli_query($conexao, "DROP DATABASE maromba_etec;")
    or die('bla bla bla erro: ' . mysqli_error());

?>