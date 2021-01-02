<?php
    $states = "Mississippi Alabama Texas Massachusetts Kansas"; 
    $statesArray = [];
    $states1 = explode(' ',$states);// explode basically function the syntax of input into pieces 
    
	echo "<strong>Original Array :</strong><br>";
	foreach ( $states1 as $i => $value )
		print("STATES[$i]=$value<br>");
	foreach($states1 as $state)  {
		if(preg_match( '/xas$/', ($state)))// pregmatch is used for pattern matching //
			$statesArray[0] = ($state);
	}
	foreach($states1 as $state) {
		if(preg_match('/^k.*s$/i', ($state)))
			$statesArray[1] = ($state);
	}
	foreach($states1 as $state) {
		if(preg_match('/^M.*s$/', ($state)))
			$statesArray[2] = ($state);
	}
	foreach($states1 as $state) {
		if(preg_match('/a$/', ($state)))
			$statesArray[3] = ($state);
    }
    
    echo "<br><br><strong>Resultant Array :</strong><br>";
	foreach ( $statesArray as $array => $value )
		print("STATES[$array]=$value<br>");
?>
