<?php
$conexao = mysqli_connect('localhost', 'root', '')
    or die("Erro na conexão com o MySQL: " . mysqli_connect_error());


mysqli_select_db($conexao, 'maromba_etec')
    or die("Erro na seleção do Banco: " . mysqli_error($conexao));
// ----------------------------------------------------------- //

$dicionario_regiao = array(
    // "exemplo" => file(.\\TXT\\exemplo.txt),
    "ABDOMINAIS" => file("./TXT/ABDOMINAIS.txt"),
    "ANTEBRAÇO" => file("./TXT/ANTEBRACO.txt"),
    "BICEPS" => file("./TXT/BICEPS.txt"),
    "DORSAL" => file("./TXT/DORSAL.txt"),
    "GLUTEOS" => file("./TXT/GLUTEOS.txt"),
    "ISQUIOTIBIAS" => file("./TXT/ISQUIOTIBIAS.txt"),
    "OMBROS" => file("./TXT/OMBROS.txt"),
    "PANTURRILHAS" => file("./TXT/PANTURRILHAS.txt"),
    "PARTE_INFERIOR_DAS_COSTAS" => file("./TXT/PARTE_INFERIOR_DAS_COSTAS.txt"),
    "PARTE_SUPERIOR_DAS_COSTAS" => file("./TXT/PARTE_SUPERIOR_DAS_COSTAS.txt"),
    "PEITO" => file("./TXT/PEITO.txt"),
    "PESCOÇO" => file("./TXT/PESCOCO.txt"),
    "QUADRICEPS" => file("./TXT/QUADRICEPS.txt"),
    "TRAPÉZIOS" => file("./TXT/TRAPEZIOS.txt"),
    "TRICEPS" => file("./TXT/TRICEPS.txt"),


);

// foreach ($dicionario_regiao['exemplo'] as $linha) {
//     // print($linha);
//     // echo "<br>";
//     $categoria = "exemplo";
//     $teste = mysqli_query($conexao, "INSERT INTO g5_xercicios VALUES (DEFAULT, '$linha', '$categoria')")
//     or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
// }
// $teste = mysqli_query($conexao, "INSERT INTO Usuario VALUES (DEFAULT, '$nome', '$email', '$senha')")
// or die('Erro na Inserção de dados: ' . mysqli_error($conexao));

foreach ($dicionario_regiao['ABDOMINAIS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "ABDOMINAIS";
    $teste = mysqli_query($conexao, "INSERT INTO g5_exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['BICEPS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "BICEPS";
    $teste = mysqli_query($conexao, "INSERT INTO g5_exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['GLUTEOS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "GLUTEOS";
    $teste = mysqli_query($conexao, "INSERT INTO g5_exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['ISQUIOTIBIAS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "ISQUIOTIBIAS";
    $teste = mysqli_query($conexao, "INSERT INTO g5_exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['OMBROS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "OMBROS";
    $teste = mysqli_query($conexao, "INSERT INTO g5_exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['PANTURRILHAS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "OMBROS";
    $teste = mysqli_query($conexao, "INSERT INTO g5_exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['PARTE_INFERIOR_DAS_COSTAS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "PARTE_INFERIOR_DAS_COSTAS";
    $teste = mysqli_query($conexao, "INSERT INTO g5_exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));

}

foreach ($dicionario_regiao['PARTE_SUPERIOR_DAS_COSTAS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "PARTE_SUPERIOR_DAS_COSTAS";
    $teste = mysqli_query($conexao, "INSERT INTO g5_exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['PEITO'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "PEITO";
    $teste = mysqli_query($conexao, "INSERT INTO g5_exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['QUADRICEPS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "QUADRICEPS";
    $teste = mysqli_query($conexao, "INSERT INTO g5_exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['TRICEPS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "TRICEPS";
    $teste = mysqli_query($conexao, "INSERT INTO g5_exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

// Inclusão dos novos exercícios abaixo

foreach ($dicionario_regiao['ANTEBRAÇO'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "ANTEBRAÇO";
    $teste = mysqli_query($conexao, "INSERT INTO g5_exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
} 

foreach ($dicionario_regiao['DORSAL'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "DORSAL";
    $teste = mysqli_query($conexao, "INSERT INTO g5_exercicios VALUES (DEFAULT, '$linha', '$categoria')")
        or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['PESCOÇO'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "PESCOÇO";
    $teste = mysqli_query($conexao, "INSERT INTO g5_exercicios VALUES (DEFAULT, '$linha', '$categoria')")
        or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}

foreach ($dicionario_regiao['TRAPÉZIOS'] as $linha) {
    // print($linha);
    // echo "<br>";
    $categoria = "TRAPÉZIOS";
    $teste = mysqli_query($conexao, "INSERT INTO g5_exercicios VALUES (DEFAULT, '$linha', '$categoria')")
    or die('Erro na Inserção de dados: ' . mysqli_error($conexao));
}