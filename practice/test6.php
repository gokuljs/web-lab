<?php
$name="final.txt";
$file=fopen($name,"r");
$hits=fscanf($file,"%d");
fclose($file);
$hits[0]++;
$file=fopen($name,"w");
fprintf($file,"%d",$hits[0]);
echo "total number of views in the page ".$hits[0];
?>