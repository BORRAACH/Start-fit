<?php

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

// Conectar ao banco de dados
$conexao = mysqli_connect('localhost', 'root', '', 'maromba_etec')
    or die('Erro no banco de dados: ' . mysqli_error());

// Buscar todos os usuários
$resultado = mysqli_query($conexao, "SELECT * FROM g5_usuario")
    or die('Erro na busca no BD: ' . mysqli_error());

// Criar um array para armazenar os usuários
$usuarios = array();

// Iterar sobre os resultados e adicionar cada usuário ao array
while ($data = mysqli_fetch_assoc($resultado)) {
    $usuarios[] = array(
        'id_usuario' => $data['id'],
        'email' => $data['email'],
        'senha' => $data['senha']
    );
}

// Fechar a conexão com o banco de dados
mysqli_close($conexao);

// Codificar o array de usuários em JSON e imprimir
$json_usuarios = json_encode($usuarios);
echo $json_usuarios;

?>