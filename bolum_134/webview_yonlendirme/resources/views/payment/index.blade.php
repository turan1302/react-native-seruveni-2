<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ödeme Sayfası</title>
</head>
<body>
<h1>Ödeme</h1>
<p>Ödemeniz işleniyor, lütfen bekleyiniz...</p>

@php
    $number = time();
    $redirectUrl = $number % 2 == 0 ? route('payment.success') : route('payment.error');
@endphp

<script>
    // 2 saniye bekle ve yönlendir
    setTimeout(function () {
        window.location.href = "{{ $redirectUrl }}";
    }, 2000);
</script>
</body>
</html>
