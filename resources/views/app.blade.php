<!DOCTYPE html>
<html lang="zh-Hans">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <noscript>
        该页面需要启用JavaScript才能工作. This page needs JavaScript activated to work.
    </noscript>
    <link rel="icon" href="{{asset('/images/favicon.png')}}" type="image/png">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ mix('/css/tailwind.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ mix('/css/components.css') }}" rel="stylesheet" type="text/css"/>
    @routes
    <script src="{{ mix('/js/app.js') }}" defer type="text/javascript"></script>
    @inertiaHead
</head>
<body>
@inertia
</body>
</html>
