<?php
include 'connect.php';

function get_single_video($pdo) {
    $query = "SELECT * FROM kids_videos";
    

    $get_video = $pdo->query($query);
    $results = array();
   


    while($row = $get_video->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }
    return $results;
}
?>