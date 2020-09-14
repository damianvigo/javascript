<?php 
  // echo 'Hola, respuesta desde el servidor';
  // var_dump($_FILES); // para imprimir objetos se usa var_dump
  // isset Evalua si una variable existe
  if(isset($_FILES['file'])) {
    $name = $_FILES['file']['name'];
    $file = $_FILES['file']['tmp_name'];
    $error = $_FILES['file']['error'];
    $destination = "../files/$name";

   $upload = move_uploaded_file($file, $destination); // esta funcion devuelve un boolean, si se sube true y si no, false.

   if($upload) {
     $res = array(
       'err' => false,
       'status' => http_response_code(200),
       'statusText' => "Archivo $name subido con exito",
       'files' => $_FILES['file']
     );
   } else {
    $res = array(
      'err' => true,
      'status' => http_response_code(400),
      'statusText' => "Error al subir el Archivo $name",
      'files' => $_FILES['file']
    );
   }

   echo json_encode($res);
  }
  
?>