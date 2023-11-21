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
    "CREATE TABLE IF NOT EXISTS g5_exercicios(
        id          INT(5) NOT NULL AUTO_INCREMENT,
        nome        VARCHAR(60) NOT NULL,
        categoria   VARCHAR(30) NOT NULL,

        PRIMARY KEY(id)

    )
    ENGINE=InnoDB
    DEFAULT CHARSET utf8;")
    or die('Erro na criação da tabela g5_exercicios: ' . mysqli_error($conexao));
    echo '<center><p> Tabela Exercícios criada </p></center>';


    mysqli_query($conexao,
    "CREATE TABLE IF NOT EXISTS g5_usuario(
        id          INT(10) NOT NULL AUTO_INCREMENT,
        nome        VARCHAR(80) NOT NULL,
        email       VARCHAR(80) NOT NULL UNIQUE,
        senha       VARCHAR(30) NOT NULL,

        PRIMARY KEY(id)

    )
    ENGINE=InnoDB
    DEFAULT CHARSET = utf8;")
    or die('Erro na criação da tabela g5_usuario: ' . mysqli_error($conexao));
    echo '<center><p> Tabela g5_Usuario criada </p></center>';


    mysqli_query($conexao, 
    "CREATE TABLE IF NOT EXISTS g5_ficha(
        id          INT(10) NOT NULL AUTO_INCREMENT,
        id_g5_usuario  INT(10) NOT NULL,
        nome_ficha     VARCHAR(50)NOT NULL,

        PRIMARY KEY(id)

    )
    ENGINE=InnoDB
    DEFAULT CHARSET utf8;")
    or die('Erro na criação da tabela g5_Ficha: ' . mysqli_error($conexao));
    echo '<center><p> Tabela g5_Ficha criada </p></center>';


    mysqli_query($conexao, 
    "CREATE TABLE IF NOT EXISTS g5_ficha_exercicio(
        id_g5_ficha    INT(10) NOT NULL,
        id_exerc    INT(5) NOT NULL

    )
    ENGINE=InnoDB
    DEFAULT CHARSET utf8;")
    or die('Erro na criação da tabela g5_Ficha_Exercicio: ' . mysqli_error($conexao));
    echo '<center><p> Tabela g5_Ficha_Exercicio criada </p></center>';


    // CHAVE ESTRANGEIRA 

    mysqli_query($conexao, 
    "ALTER TABLE g5_ficha
        ADD CONSTRAINT id_user
        FOREIGN KEY (id_g5_usuario)
        REFERENCES g5_usuario(id)")
    or die('Erro de criação de chave estrangeira da g5_ficha: ' . mysqli_error());
    echo '<center><p> Chave Estrangeira de g5_ficha criada </p></center>';

    mysqli_query($conexao, 
    "ALTER TABLE g5_ficha_exercicio
        ADD CONSTRAINT id_ficha
        FOREIGN KEY (id_g5_ficha)
        REFERENCES g5_ficha(id) ON DELETE CASCADE,
        
        -- ADD CONSTRAINT id_usuario
        -- FOREIGN KEY (id_g5_ficha)
        -- REFERENCES g5_usuario(id) ON DELETE CASCADE,
        
        ADD CONSTRAINT id_exerc
        FOREIGN KEY (id_exerc)
        REFERENCES g5_exercicios(id) ON DELETE CASCADE")
    or die('Erro de criação de chave estrangeira da g5_ficha: ' . mysqli_error());
    echo '<center><p> Chave Estrangeira de g5_ficha criada </p></center>';


    // -----------------------------------------------------------------------------------//

?>