<?php

$conexao = mysqli_connect('localhost', 'root', '')
    or die("Erro na conexão com o MySQL: " . mysqli_connect_error());


mysqli_select_db($conexao, 'Maromba_Etec')
    or die("Erro na seleção do Banco: " . mysqli_error($conexao));
// ----------------------------------------------------------- //

// Definir as variáveis session

if (!isset($_SESSION['id_usuario'])) {
    $_SESSION['id_usuario']       = null;
}
if (!isset($_SESSION['nome'])) {
    $_SESSION['nome']                =   null;
}
if (!isset($_SESSION['email'])) {
    $_SESSION['email']               =   null;
}
if (!isset($_SESSION['senha'])) {
    $_SESSION['senha']               =   null;
}
if (!isset($_SESSION['botao'])) {
    $_SESSION['botao']       = null;
}
if (!isset($_SESSION['consulta'])) {
    $_SESSION['consulta']    = "n";
}

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
</head>

<body>

    <h1 style="text-align: center;">Cadastre-se</h1>

    <div style="text-align: center;">
        <form method="POST" action="processamento/processador.php">

            <p>nome: <input type="text" name="nome" value="<?php echo $_SESSION['nome']; ?>" size="50px"> </p>

            <p>email: <input type="email" name="email" value="<?php echo $_SESSION['email']; ?>" size="50px"></p>

            <p>senha: <input type="password" name="senha" value="<?php echo $_SESSION['senha']; ?>" size="50px"></p>

            <button type="submit" name="botao" value="cadastro">Cadastro</button>
            <div> Já tem uma conta? <a href="login.php">Clique aqui para fazer login</a></div>

            <!-- <div style='text-align:center;'></div> -->

        </form>
    </div>
</body>

</html>

<?php

// $_SESSION['id_usuario'] = $id_usuario = filter_input(INPUT_POST, 'id_usuario');
// $_SESSION['nome']       = $nome       = filter_input(INPUT_POST, 'nome');
// $_SESSION['email']      = $email      = filter_input(INPUT_POST, 'email');
// $_SESSION['senha']      = $senha      = filter_input(INPUT_POST, 'senha');
// $_SESSION['botao']      = $botao      = filter_input(INPUT_POST, 'botao');

// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     if (isset($_POST["botao"])) {
//         $nome =  $_POST["nome"];
//         $email = $_POST["email"];
//         $senha = $_POST["senha"];
//         $botao = $_POST['botao'];

//         // if (! empty($nome)) {
//         //     echo "<div style='text-align:center;'>O nome não está vazio</div>";
//         // } else if (empty($email)) {
//         //     echo "<div style='text-align:center;'>O email não está vazio</div>";
//         // } else if (! empty($senha)){
//         //     echo "<div style='text-align:center;'>A senha não está vazia</div>";
//         // } else {
//         // echo  "<div style='text-align:center;'>Mds</div>";
//         // }

//         // Parte do Cadastro

//         var_dump($nome);
//         var_dump($email);
//         var_dump($senha);

//         if ($botao === "cadastro") {

//             // if (( empty($nome) && empty($email) && empty($senha))) {
//             if ($nome && $email && $senha == '') {
//                 echo 'É preciso preencher todos os campos';
//             } else {
//                 mysqli_query($conexao, "INSERT INTO Usuario VALUES (DEFAULT, '$nome', '$email', '$senha')")
//                     or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
//                 echo '<div style="text-align:center; font-size: 40px;">Foi... ou não    </div>';
//                 echo "<center>" . $_SESSION['consulta'] .  "</center>";
                
//             }
//         }
//     }
// }
    ?>