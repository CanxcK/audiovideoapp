<?php
	include 'functions.php';

    // pass the connection and the movie id to a function
    $data = get_single_video($conn);
    echo json_encode($data);

?>

