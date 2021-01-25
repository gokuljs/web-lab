<!DOCTYPE HTML>
<HTML>
<head>
<title>simple calculator program</title>
</head>
<style>
table{
    margin:0 auto;
    border:1px solid black;

    background-color:grey;
    color:black;
    width:50%;

}
input{
    width:100%;
    box-sizing:border-box;
}
td{
    border:1px solid black;
}
</style>
<body>
<form method="POST">
<table>
    <caption>
    <h2>simple calculator</h2>
    </caption>
    <tr>
    <td>value 1</td>
    <td><input type="text" name="num1" placeholder="value1"></td>
    <td rowspan="2"><input type="submit" name="submit" placeholder="calculator"></td>
    </tr>
    <tr>
    <td>value 2</td>
    <td><input type="text" name="num2" placeholder="value2"></td>
    
    </tr>
</table>
<table>
<?php
    if(isset($_POST['submit'])){
        $num1=$_POST['num1'];
        $num2=$_POST['num2'];
        if(is_numeric($num1) and is_numeric($num2)){
            echo "<tr><td>addition</td><td>".($num1+$num2)."</td></tr>";
            echo "<tr><td>subtraction</td><td>".($num1-$num2)."</td></tr>";
            echo "<tr><td>multiplication</td><td>".($num1*$num2)."</td></tr>";
            echo "<tr><td>division</td><td>".($num1/$num2)."</td></tr>";

        }

    }
    ?>

</table>
</form>
</body>
</html>