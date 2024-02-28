import React from 'react';
import './style.css';

const Login: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // 폼 제출 로직 구현
    }
    
    return (
    <div>
        <header>
            <div className="container">
            <img className="img" src="/" title="Logo" alt="Logo" />
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
    </div>
    );
};

export default Login;