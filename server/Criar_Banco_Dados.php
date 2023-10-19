<?php

    echo "<center> Criar Banco de Dados </center>";

    // CONEXÃO COM O BANCO DE DADOS
    $conexao = mysqli_connect('localhost', 'root', '')
        or die('Erro na conexão com o MySQL: ' . mysqli_connect_error());


    // CRIAÇÃO E SELEÇÃO DO BANCO
    mysqli_query($conexao, 
    "CREATE DATABASE IF NOT EXISTS maromba_etec
        DEFAULT CHARACTER SET utf8
        DEFAULT COLLATE utf8_general_ci;")

    or die('Erro na criação do banco: ' . mysqli_error());


    mysqli_select_db($conexao, 'maromba_etec')
    or die('Erro na seleção do Banco: ' . mysqli_error());


    // CRIAÇÃO DAS TABELAS
    mysqli_query($conexao, 
    "CREATE TABLE IF NOT EXISTS exercicios(
        id          SMALLINT(5) NOT NULL AUTO_INCREMENT,
        nome        VARCHAR(60) NOT NULL,
        categoria   VARCHAR(30) NOT NULL,
        objetivo    VARCHAR(20) NOT NULL,

        PRIMARY KEY(id)

    )
    ENGINE=InnoDB
    DEFAULT CHARSET utf8;")
    or die('Erro na criação da tabela exercicios: ' . mysqli_error($conexao));
    echo '<center><p> Tabela Exercícios criada </p></center>';


    mysqli_query($conexao,
    "CREATE TABLE IF NOT EXISTS usuario(
        id          INT(10) NOT NULL AUTO_INCREMENT,
        nome        VARCHAR(80) NOT NULL,
        email       VARCHAR(80) NOT NULL UNIQUE,
        senha       VARCHAR(30) NOT NULL,

        PRIMARY KEY(id)

    )
    ENGINE=InnoDB
    DEFAULT CHARSET = utf8;")
    or die('Erro na criação da tabela usuario: ' . mysqli_error($conexao));
    echo '<center><p> Tabela Usuario criada </p></center>';


    mysqli_query($conexao, 
    "CREATE TABLE IF NOT EXISTS ficha(
        id          INT(10) NOT NULL AUTO_INCREMENT,
        id_usuario  INT(10) NOT NULL,

        PRIMARY KEY(id)

    )
    ENGINE=InnoDB
    DEFAULT CHARSET utf8;")
    or die('Erro na criação da tabela Ficha: ' . mysqli_error($conexao));
    echo '<center><p> Tabela Ficha criada </p></center>';


    mysqli_query($conexao, 
    "CREATE TABLE IF NOT EXISTS ficha_Exercicio(
        id_ficha    INT(10) NOT NULL,
        id_exerc    INT(10) NOT NULL

    )
    ENGINE=InnoDB
    DEFAULT CHARSET utf8;")
    or die('Erro na criação da tabela Ficha_Exercicio: ' . mysqli_error($conexao));
    echo '<center><p> Tabela Ficha_Exercicio criada </p></center>';


    // CRIAÇÃO DAS CHAVES ESTRANGEIRAS

    // -----------------------------------------------------------------------------------//

    

?>