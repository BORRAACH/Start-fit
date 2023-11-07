<?php

$conexao = mysqli_connect('localhost', 'root', '')
    or die("Erro na conexão com o MySQL: " . mysqli_connect_error());


mysqli_select_db($conexao, 'Maromba_Etec')
    or die("Erro na seleção do Banco: " . mysqli_error($conexao));
// ----------------------------------------------------------- //

// Definir as variáveis session

if (!isset($_SESSION['id_usuario'])) {
    $_SESSION['id_usuario']          = null;
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
    <title>CRUD</title>
</head>

<body>

    <h1 style="text-align: center;">Form Login</h1>

    <div style="text-align: center;">
        <form method="POST" action="processamento/processador.php">

            <p>nome: <input type="text" name="nome" value="<?php echo $_SESSION['nome']; ?>" size="50px"> </p>

            <p>email: <input type="email" name="email" value="<?php echo $_SESSION['email']; ?>" size="50px"></p>

            <p>senha: <input type="password" name="senha" value="<?php echo $_SESSION['senha']; ?>" size="50px"></p>

            <button type="submit" name="botao" value="cadastro">Cadastro</button>
            <button type='submit' name="botao" value="consulta">Consulta</button>
            <button type="submit" name="botao" value="update">Atualiza</button>
            <button type="submit" name="botao" value="delete"> Deleta</button>

            <!-- <div style='text-align:center;'></div> -->

        </form>
    </div>
</body>

</html>

<?php

$_SESSION['id_usuario'] = $id_usuario =  filter_input(INPUT_POST, 'id_usuario');
$_SESSION['nome']       = $nome       =  filter_input(INPUT_POST, 'nome');
$_SESSION['email']      = $email      =  filter_input(INPUT_POST, 'email');
$_SESSION['senha']      = $senha      =  filter_input(INPUT_POST, 'senha');
$_SESSION['botao']      = $botao      =  filter_input(INPUT_POST, 'botao');

if (!isset($_SESSION['consulta'])) {
    $_SESSION['consulta']    = "n";
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["botao"])) {
        $nome =  $_POST["nome"];
        $email = $_POST["email"];
        $senha = $_POST["senha"];
        $botao = $_POST['botao'];

        // if (! empty($nome)) {
        //     echo "<div style='text-align:center;'>O nome não está vazio</div>";
        // } else if (empty($email)) {
        //     echo "<div style='text-align:center;'>O email não está vazio</div>";
        // } else if (! empty($senha)){
        //     echo "<div style='text-align:center;'>A senha não está vazia</div>";
        // } else {
        // echo  "<div style='text-align:center;'>Mds</div>";
        // }

        // Parte do Cadastro

        var_dump($nome);
        var_dump($email);
        var_dump($senha);

        if ($botao === "cadastro") {

            // if (( empty($nome) && empty($email) && empty($senha))) {
            if ($nome && $email && $senha == '') {
                echo 'É preciso preencher todos os campos';
            } else {
                mysqli_query($conexao, "INSERT INTO Usuario VALUES (DEFAULT, '$nome', '$email', '$senha')")
                    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
                echo '<div style="text-align:center; font-size: 40px;">Foi... ou não    </div>';
                echo "<center>" . $_SESSION['consulta'] .  "</center>";
                
            }
        }
        // echo "<div style='text-align:center; font-size: 20px; margin-top: 5px;'>" . $botao . "</div>";

        // Parte da consulta

        if ($botao === "consulta") {
            if (empty($email)) {
                echo "É preciso preencher o campo email";
            } else {
                $resultado = mysqli_query($conexao, "SELECT * FROM Usuario WHERE email = '$email'");
                $rowcount = mysqli_num_rows($resultado);
                if ($rowcount) {
                    $campo = mysqli_fetch_array($resultado);
                    $SESSION['nome'] =  $nome  = $campo['nome'];
                    $SESSION['email'] = $email = $campo['email'];
                    $SESSION['senha'] = $senha = $campo['senha'];
                    // $consultakkkkk = "s";
                    $_SESSION['consulta']  = "s";
                    echo "<center>" . $_SESSION['consulta'] . "</center>";

                    echo "<div style='text-align:center; font-size: 40px;'> Seu nome de cadastro é: " . $SESSION['nome'] . "</div>";
                    echo "<div style='text-align:center; font-size: 40px;'> Seu email de cadastro é: " . $SESSION['email'] . "</div>";
                    echo "<div style='text-align:center; font-size: 40px;'>Sua senha de cadastro é: " . $SESSION['senha'] . "</div>";
                    // echo "<div style='text-align:center; color:blue; font-size: 20px;" .   $SESSION['senha'] . "</div>";
                } else {
                    // A consulta não encontrou nenhum registro
                    echo "Não foi encontrado nenhum registro";
                }
            }
        }

        // Parte do Update

        if ($botao == "update") {
            // $_SESSION['consulta'] = "s";
            echo "<div style='text-align:center;'>" . $_SESSION['consulta'] . "</div>";
            if ($_SESSION['consulta'] == "n") {
                echo "<div style='text-align:center;'>É necessário a consulta primeiro</div>";
            } else {
                if (empty($nome) and empty($email) and empty($senha)) {
                    echo "<div style='text-align:center;'>Tá vazio. Preenche</div>";
                } else {
                    $sql = mysqli_query($conexao, "UPDATE Usuario SET 
                                                                    nome='$nome',
                                                                    email='$email' 
                                                                    WHERE email='$email'");
                    if ($sql === TRUE) {
                        echo "<div style='text-align: center';>Dados atualizados</div>";
                        echo "<div style='text-align: center'> Novo nome: " . $nome . "</div>";
                        echo "<div style='text-align: center'> Novo email: " . $email . "</div>";
                    }
                }
            }
        }
        // Fim isset botao
    }
} // Fim do Resquest Post

?>