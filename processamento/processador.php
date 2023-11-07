<?php 
session_start();
$conexao = mysqli_connect('localhost', 'root', '')
    or die("Erro na conexão com o MySQL: " . mysqli_connect_error());


mysqli_select_db($conexao, 'Maromba_Etec')
    or die("Erro na seleção do Banco: " . mysqli_error($conexao));

echo "<center>";

    $nome =  $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $botao = $_POST['botao'];

    var_dump($nome);
    var_dump($senha);
    var_dump($email);
    var_dump($botao);
    
    if ($botao === "cadastro") {

        // if (( empty($nome) && empty($email) && empty($senha))) {
        if ($nome && $email && $senha == '') {
            echo 'É preciso preencher todos os campos';
            header("Location: ../CRUD.php");
        } else {
            $teste = mysqli_query($conexao, "INSERT INTO Usuario VALUES (DEFAULT, '$nome', '$email', '$senha')")
                or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
            echo '<div style="text-align:center; font-size: 40px;">Foi... ou não    </div>';
            if ($teste) {
                $_SESSION['nome'] =  $_POST['nome'];
                $_SESSION['email'] = $_POST['email'];
                $_SESSION['senha'] = $_POST['senha'];
                header("Location: ../pagina.php");
            }
            else {
                header("Location: $msgerro");
            }
        }
    }


?>