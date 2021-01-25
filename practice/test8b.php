<?php
$a=array(array(1,2,3),array(4,5,6),array(7,8,9));
$b=array(array(1,2,3),array(4,5,6),array(7,8,9));
$m=count($a);
$n=count($a[2]);
$p=count($b);
$q=count($b[2]);
echo "matrix 1";
for($i=0;$i<$m;$i++){
    for($j=0;$j<$n;$j++){
        echo " ".$a[$i][$j];
    }
    echo "</br>";
}
echo "</br>";
echo "matrix 2";
echo "</br>";
for($i=0;$i<$m;$i++){
    for($j=0;$j<$n;$j++){
        echo " ".$b[$i][$j];
    }
    echo "</br>";
}
echo "Addition ";
echo "</br>";
for($i=0;$i<$m;$i++){
    for($j=0;$j<$n;$j++){
        echo " ".$a[$i][$j]+$b[$i][$j];
    }
    echo "</br>";
}

echo "transpose";
echo "</br>";
for($i=0;$i<$m;$i++){
    for($j=0;$j<$n;$j++){
        echo " ".$a[$j][$i];
    }
    echo "</br>";
}
echo "transpose";
echo "</br>";
for($i=0;$i<$m;$i++){
    for($j=0;$j<$n;$j++){
        echo " ".$b[$j][$i];
    }
    echo "</br>";
}

echo "Multiplication";
echo "</br>";
$result=array();
for($i=0;$i<$m;$i++){
    for($j=0;$j<$q;$j++){
        $result[$i][$j]=0;
        for ($k=0;$k<$n;$k++){
            $result[$i][$j]+=$a[$i][$k]*$b[$k][$j];
        }
    }
   
}
for($i=0;$i<$m;$i++){
    for($j=0;$j<$q;$j++){
        echo " ".$result[$i][$j];
    }
    echo "</br>";
}


?>