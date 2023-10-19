<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
</head>

<body>
  <form action="#" method="POST">
    <h1>Login</h1>
    <p>Email: <input type="text" name="email" size="50px"></p>
    <p>Senha: <input type="password" name="senha" size="50px"></p>

    <input type="submit" name="botao" value="enviar">
  </form>


</body>

</html>

<?php if(isset($error)): ?>
<div>
  <?= $error ?>
</div>
<?php endif; ?>