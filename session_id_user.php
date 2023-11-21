<?php 

  header('Access-Control-Allow-Origin: http://localhost:5173');
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
  header('Access-Control-Allow-Headers: Content-Type');
  header('Access-Control-Allow-Credentials: true');

  // Inicializa a sessão.
  session_start();
  
  // Se é preciso matar a sessão, então os cookies de sessão também devem ser apagados.
  // Nota: Isto destruirá a sessão, e não apenas os dados!
  if (ini_get("session.use_cookies")) {
      $params = session_get_cookie_params();
      setcookie(session_name(), '', time() - 42000,
          $params["path"], $params["domain"],
          $params["secure"], $params["httponly"]
      );
  }
  
  // Salva o ID de sessão antes de destruir a sessão
  $sessionId = session_id();
  
  // Por último, destrói a sessão
  session_destroy();
  
  // Use o $sessionId conforme necessário
  echo  $sessionId;

?>