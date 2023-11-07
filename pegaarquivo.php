<?php 
$conexao = mysqli_connect('localhost', 'root', '')
or die("Erro na conexão com o MySQL: " . mysqli_connect_error());


mysqli_select_db($conexao, 'Maromba_Etec')
or die("Erro na seleção do Banco: " . mysqli_error($conexao));
// ----------------------------------------------------------- //

$dicionario_regiao = array(
    "ABDOMINAIS" => file("./TXT/ABDOMINAIS.txt"),
    "ARMADILHAS" => file("./TXT/ARMADILHAS.txt"),
    "BICEPS" => file("./TXT/BICEPS.txt"),
    "GLUTEOS" => file("./TXT/GLUTEOS.txt"),
    "ISQUIOTIBIAS" => file("./TXT/ISQUIOTIBIAS.txt"),
    "LATS" => file("./TXT/LATS.txt"),
    "OMBROS" => file("./TXT/OMBROS.txt"),
    "PANTURRILHAS" => file("./TXT/PANTURRILHAS.txt"),
    "PARTE_INFERIOR_DAS_COSTAS" => file("./TXT/PARTE_INFERIOR_DAS_COSTAS.txt"),
    "PARTE_SUPERIOR_DAS_COSTAS" => file("./TXT/PARTE_SUPERIOR_DAS_COSTAS.txt"),
    "PEITO" => file("./TXT/PEITO.txt"),
    "QUADRICEPS" => file("./TXT/QUADRICEPS.txt"),
    "TRICEPS" => file("./TXT/TRICEPS.txt")
    // "exemplo" => file(.\\TXT\\exemplo.txt),
);

// $teste = mysqli_query($conexao, "INSERT INTO Usuario VALUES (DEFAULT, '$nome', '$email', '$senha')")
// or die('Erro na Inserção de dados: ' . mysqli_error($conexao));

foreach ($dicionario_regiao['ABDOMINAIS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "ABDOMINAIS";
    $teste = mysqli_query($conexao, "INSERT INTO Exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
    // if ($teste) {
    //     print("<div style='text-align:center;'> Inclusão dos exercícios de <span style='color: red;'>" . $categoria .  "</span> foi bem sucedida!</div>");
    // }
}

foreach ($dicionario_regiao['ARMADILHAS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "ARMADILHAS";
    $teste = mysqli_query($conexao, "INSERT INTO Exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['BICEPS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "BICEPS";
    $teste = mysqli_query($conexao, "INSERT INTO Exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['GLUTEOS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "GLUTEOS";
    $teste = mysqli_query($conexao, "INSERT INTO Exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['ISQUIOTIBIAS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "ISQUIOTIBIAS";
    $teste = mysqli_query($conexao, "INSERT INTO Exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['LATS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "LATS";
    $teste = mysqli_query($conexao, "INSERT INTO Exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['OMBROS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "OMBROS";
    $teste = mysqli_query($conexao, "INSERT INTO Exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['PANTURRILHAS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "OMBROS";
    $teste = mysqli_query($conexao, "INSERT INTO Exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['PARTE_INFERIOR_DAS_COSTAS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "PARTE_INFERIOR_DAS_COSTAS";
    $teste = mysqli_query($conexao, "INSERT INTO Exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));

}

foreach ($dicionario_regiao['PARTE_SUPERIOR_DAS_COSTAS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "PARTE_SUPERIOR_DAS_COSTAS";
    $teste = mysqli_query($conexao, "INSERT INTO Exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['PEITO'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "PEITO";
    $teste = mysqli_query($conexao, "INSERT INTO Exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['QUADRICEPS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "QUADRICEPS";
    $teste = mysqli_query($conexao, "INSERT INTO Exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['TRICEPS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "TRICEPS";
    $teste = mysqli_query($conexao, "INSERT INTO Exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}
?>