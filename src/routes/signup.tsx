<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign up</title>
    <link rel="stylesheet" href="https://raw.githubusercontent.com/nicolas-cusan/destyle.css/master/destyle.css">
    <link rel="stylesheet" href="style.css">
    <link href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css">
    <link href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="//demo.productionready.io/main.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
    <header>
        <div class="container">
            <img class="img" src="/" title="Logo">
            <nav class="menu-bar"> 
                <div OnClick="location.href='Home URL'" style="cursor:pointer;" class="menu" id="home">
                    Home
                </div>
                <div OnClick="location.href='login.html'" style="cursor:pointer;" class="menu" id="login">
                    Log in
                </div>
                <div OnClick="location.href='signup.html'" style="cursor:pointer; color:black" class="menu" id="signup">
                    Sign up
                </div>
            </nav>
        </div>  
    </header>
    <section>
        <div class="wrapper">
            <h2> Sign up </h2>
                <a href="login.html"> Have an account? </a>
            <form method="post" action="서버URL" id="login-form">
                <input type="text" name="userName" placeholder="Username">
                <input type="text" name="userEmail" placeholder="Email">
                <input type="password" name="userPassword" placeholder="Password">
                <input type="submit" value="Sign up">
            </form>
        </div>
    </section>
  </body>
</html>
