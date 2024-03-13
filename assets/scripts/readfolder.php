<?php
$directory_path = "";

$files = scandir($directory_path);
$files = array_diff($files, array('.', '..'));

echo json_encode($files);
?>