<?php
$states ="Mississipi alabama Texas Massachusets kanvas";
$statearray=[] ;
$state=explode(' ',$states);
foreach($state as $values){
    echo " ".$values."</br>";
}
foreach($state as $value){
    if(preg_match('/xas$/',$value)){
        $statearray[0]=$value;
    }
}
foreach($state as $value){
    if(preg_match('/^k.*s$/',$value)){
        $statearray[1]=$value;
    }
}
foreach($state as $value){
    if(preg_match('/^M.*s$/',$value)){
        $statearray[3]=$value;
    }
}
foreach($state as $value){
    if(preg_match('/a$/',$value)){
        $statearray[4]=$value;
    }
}
echo "final array </br>";
foreach($statearray as $value){
    echo "".$value."</br>";
}
?>