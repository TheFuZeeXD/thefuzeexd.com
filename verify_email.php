<?php

$host = 'thefuzeexd.beget.tech';
$dbname = 'thefuzeexd_fzff';
$username = 'thefuzeexd_fzff';
$password = 'X130809@Xxx';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mail = filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL);
    $description = trim($_POST['description']);
    

    if (!$mail) {
        header('Location: index.php?mail_status=invalid email');
        exit;
    }
    
    if (empty($description)) {
        header('Location: index.php?mail_status=empty description');
        exit;
    }
    
    try {

        $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $user_ip = getRealUserIp();
        

        if (!checkRateLimit($pdo, $user_ip)) {
            header('Location: index.php?mail_status=rate limit exceeded');
            exit;
        }
        

        $sql = "INSERT INTO feedback (mail, description, created_at, user_ip) VALUES (:mail, :description, NOW(), :user_ip)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':mail', $mail);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':user_ip', $user_ip);
        

        if ($stmt->execute()) {
            recordRequest($pdo, $user_ip);
            header('Location: index.php?mail_status=complete');
        } else {
            header('Location: index.php?mail_status=database error save');
        }
        
    } catch (PDOException $e) {
        die("Ошибка подключения к базе данных: " . $e->getMessage());
    }
} else {
    die('Неверный метод запроса');
}

function getRealUserIp() {
    $ip_keys = [
        'HTTP_CF_CONNECTING_IP', 
        'HTTP_X_REAL_IP',
        'HTTP_X_FORWARDED_FOR',
        'HTTP_X_FORWARDED',
        'HTTP_X_CLUSTER_CLIENT_IP',
        'HTTP_FORWARDED_FOR',
        'HTTP_FORWARDED',
        'REMOTE_ADDR'
    ];
    
    foreach ($ip_keys as $key) {
        if (array_key_exists($key, $_SERVER) && !empty($_SERVER[$key])) {
            $ips = explode(',', $_SERVER[$key]);
            $ip = trim($ips[0]);
            if (filter_var($ip, FILTER_VALIDATE_IP)) {
                return $ip;
            }
        }
    }
    
    return $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
}


function checkRateLimit($pdo, $ip) {
    $limit_count = 2;
    $limit_hours = 2;
    
    $sql = "SELECT COUNT(*) as request_count 
            FROM feedback 
            WHERE user_ip = :ip 
            AND created_at >= DATE_SUB(NOW(), INTERVAL :hours HOUR)";
    
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':ip', $ip);
    $stmt->bindParam(':hours', $limit_hours, PDO::PARAM_INT);
    $stmt->execute();
    
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    
    return $result['request_count'] < $limit_count;
}


function recordRequest($pdo, $ip) {
    return true;
}


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Check status</title>
    <style>
        html {
            background: linear-gradient(180deg, rgb(30, 35, 48), rgb(15, 15, 15));
        }
    </style>
</head>
<body>
    
</body>
</html>