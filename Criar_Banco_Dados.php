<?php

    echo "<h1 style='text-align: center;'>Criar Banco de Dados</h1>";

    // CONEXÃO COM O BANCO DE DADOS
    $conexao = mysqli_connect('localhost', 'root', '')
        or die('Erro na conexão com o MySQL: ' . mysqli_connect_error($conexao));


    // CRIAÇÃO E SELEÇÃO DO BANCO
    mysqli_query($conexao, 
    "CREATE DATABASE IF NOT EXISTS maromba_etec
        DEFAULT CHARACTER SET utf8
        DEFAULT COLLATE utf8_general_ci;")

    or die('Erro na criação do banco: ' . mysqli_error($conexao));


    mysqli_select_db($conexao, 'maromba_etec')
    or die('Erro na seleção do Banco: ' . mysqli_error($conexao));

    // Explode o banco (se precisar)
    // mysqli_query($conexao, "DROP DATABASE Maromba_Etec") or die ("BD Maromba_Etec ainda não foi criado!");

    // CRIAÇÃO DAS TABELAS
    mysqli_query($conexao, 
    "CREATE TABLE IF NOT EXISTS exercicios(
        id_exercicio    SMALLINT(5) NOT NULL AUTO_INCREMENT,
        nome_exercicio  VARCHAR(60) NOT NULL,
        categoria       VARCHAR(30) NOT NULL,

        PRIMARY KEY(id_exercicio)

    )
    ENGINE=InnoDB
    DEFAULT CHARSET utf8;")
    or die('Erro na criação da tabela exercicios: ' . mysqli_error($conexao));
    echo '<center><p> Tabela Exercícios criada </p></center>';


    mysqli_query($conexao,
    "CREATE TABLE IF NOT EXISTS usuario(
        id_usuario  INT(10) NOT NULL AUTO_INCREMENT,
        nome        VARCHAR(225) NOT NULL,
        email       VARCHAR(80) NOT NULL UNIQUE,
        senha       VARCHAR(30) NOT NULL,

        PRIMARY KEY(id_usuario)

    )
    ENGINE=InnoDB
    DEFAULT CHARSET = utf8;")
    or die('Erro na criação da tabela usuario: ' . mysqli_error($conexao));
    echo '<center><p> Tabela Usuario criada </p></center>';


    mysqli_query($conexao, 
    "CREATE TABLE IF NOT EXISTS ficha(
        id_ficha    INT(10) NOT NULL AUTO_INCREMENT,
        id_usuario  INT(10) NOT NULL,

        PRIMARY KEY(id_ficha)

    )
    ENGINE=InnoDB
    DEFAULT CHARSET utf8;")
    or die('Erro na criação da tabela ficha: ' . mysqli_error($conexao));
    echo '<center><p> Tabela Ficha criada </p></center>';


    mysqli_query($conexao, 
    "CREATE TABLE IF NOT EXISTS ficha_exercicio(
        id_ficha_exe      INT(10) NOT NULL AUTO_INCREMENT,
        id_ficha          INT(10) NOT NULL,
        id_exerc          INT(10) NOT NULL,

        PRIMARY KEY (id_ficha_exe)

    )
    ENGINE=InnoDB
    DEFAULT CHARSET = utf8;")
    or die('Erro na criação da tabela ficha_exercicio: ' . mysqli_error($conexao));
    echo '<center><p> Tabela Ficha_Exercicio criada </p></center>';

    mysqli_query($conexao, 
    "CREATE TABLE IF NOT EXISTS serie_exercicio(
        id_ser_exe  INT (10) NOT NULL AUTO_INCREMENT,
        serie       INT (02) NOT NULL,
        repeticoes  INT (10) NOT NULL,
        kg          INT (10) NOT NULL,
        concluido   INT (02) NOT NULL,

        PRIMARY KEY (id_ser_exe)
    )
    ENGINE=InnoDB
    DEFAULT CHARSET utf8;")
    or die('Erro na criação da tabela serie: ' . mysqli_error($conexao));
    echo '<center><p> Tabela Serie_exercicio criada </p></center>';


    // CRIAÇÃO DAS CHAVES ESTRANGEIRAS

    // -----------------------------------------------------------------------------------//

    

?>