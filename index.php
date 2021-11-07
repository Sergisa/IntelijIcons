<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="dist/css/main.css" rel="stylesheet">
    <title>Document</title>
    <style>
        #iconPackList{
            height: 100%;
        }
    </style>
</head>
<body>
<div class="row ms-2 mt-2">
    <div class="col-md-3">
        <?php
        $data = json_decode(file_get_contents('https://intellij-icons.jetbrains.design/data.json'));
        echo "<ul id='iconPackList' class='list-group overflow-auto position-fixed'>";
        foreach ($data as $iconPack) {
            include 'iconListItem.php';
        }
        echo "</ul>";
        ?>
    </div>
    <div class="col-md-9">
        <div class="card" id="iconsList">
            <div class="card-body">
                <div class="card-title"></div>
                <div class="card-text"></div>
            </div>
        </div>
    </div>
</div>
<div class="overlay">

    <div class="snackbar">
        icondata

        <button class="btn btn-light">Download</button>
    </div>
</div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="dist/js/bundle.js"></script>
</html>