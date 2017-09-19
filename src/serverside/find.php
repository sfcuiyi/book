<?php

     $con = mysqli_connect('127.0.0.1',"root",'','book');
     
     mysqli_query($con,"set names utf8");

     $name = $_REQUEST['name'];
     $price = $_REQUEST['price'];
     $type = $_REQUEST['type'];

    // $name = '';
    // $price = '';
    // $type = '';

     $sql = "
        
            select 
                b.id id,
                b.title title,
                b.price price,
                b.content content,
                avg(c.star) star
            from
                t_book b
            left join 
                t_book_comment c on c.book_id = b.id
            where
                1 = 1
    ";

    if($name != "")
    {
        $sql .= " and b.title like '%$name%' ";
    }
    if($price != "")
    {
        $sql .= " and  b.price > '$price' ";
    }
    if($type != "")
    {
        $sql .= " and b.type = '$type' ";
    }
                
    $sql .="  group by b.id ";

    $result = mysqli_query($con,$sql);

    $resultArr = array();

    while($row = mysqli_fetch_array($result,MYSQLI_ASSOC))
    {
        array_push($resultArr,$row);
    }

    echo json_encode($resultArr);
?>