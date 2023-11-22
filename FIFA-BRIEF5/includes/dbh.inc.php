
<?php
$serverName = "localhost";
$userName = "root";
$password = "";
$dbName = "FIFA-BRIEF5";

// Create connection
$conn = new mysqli($serverName, $userName, $password, $dbName);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// If you reach this point, the connection was successful
echo "Connected successfully";
?>