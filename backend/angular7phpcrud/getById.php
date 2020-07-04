<?php
require 'connect.php';

$id = $_GET['id'];
{
return http_response_code(400);
}

  // Get by id.
  $sql = "SELECT * FROM `students` WHERE `sId` ='{$id}' LIMIT 1";

  $result = mysqli_query($con,$sql);
  $row = mysqli_fetch_assoc($result);
  
  $json = json_encode($row);
  echo $json;
}
exit;