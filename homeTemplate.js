const home = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="alternate" href="android-app://com.moneyveo/https/moneyveo.ua/?" />
    <link rel="alternate" href="android-app://com.moneyveo/https/client-veo-fd-ua.moneyveo.local/?" />
    <link rel="alternate" href="android-app://com.moneyveo/https/utm-test-pr.herokuapp.com/?" />
</head>
<body>

    <h1>HTML HOME PAGE</h1>
    
    <table>
        <thead><tr><td> PHONE </td></tr></thead>
        <tbody>
            <tr><td><a href="/apple-app-site-association">ios</a></td></tr>
            <tr><td><a href="/.well-known/assetlinks">android </a></td></tr>
        </tbody>
    </table>

</body>
</html>
`

module.exports = home
