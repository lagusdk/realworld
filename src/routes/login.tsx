import React from 'react';
import './style.css';

const Login: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // 폼 제출 로직 구현
    return (
    <html lang="en">
    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Log in</title>
        <link rel="stylesheet" href="https://raw.githubusercontent.com/nicolas-cusan/destyle.css/master/destyle.css">
        <link rel="stylesheet" href="style.css">
        <link href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css">
        <link href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="//demo.productionready.io/main.css" />
    </head>
    <body>
        <div id="root"></div>
        <header>
            <div className="container">
                <img className="img" src="/" title="Logo">
                <nav className="menu-bar"> 
                <div onClick={() => {}} style={{ cursor: 'pointer' }} className="menu" id="home">
                    Home
                </div>
                <div onClick={() => {}} style={{ cursor: 'pointer', color: 'black' }} className="menu" id="login">
                    Log in
                </div>
                <div onClick={() => {}} style={{ cursor: 'pointer' }} className="menu" id="signup">
                    Sign up
                    </div>
                </nav>
            </div>  
        </header>
        <section>
            <div className="wrapper">
                <h2> Log in </h2>
                    <a href="signup.html"> Need an account? </a>
                    <form onSubmit={handleSubmit} id="login-form">
                        <input type="text" name="userEmail" placeholder="Email" />
                        <input type="password" name="userPassword" placeholder="Password" />
                        <label htmlFor="remember-check">
                            <input type="checkbox" id="remember-check" /> 아이디 저장하기
                        </label>
                            <input type="submit" value="Log in" />
                    </form>
            </div>
        </section>
    </body>
    </html>
    );
};

export default Login;