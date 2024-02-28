import React from 'react';
import 'style.css';

const Signup: React.FC = () => {
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
                <h2> Sign up </h2>
                    <a href="login.html"> Have an account? </a>
                    <form onSubmit={handleSubmit} id="signup-form">
                        <input type="text" name="userName" placeholder="Username" />
                        <input type="text" name="userEmail" placeholder="Email" />
                        <input type="password" name="userPassword" placeholder="Password" />
                        <input type="submit" value="Sign up"/>
                    </form>
            </div>
        </section>
  </div>
  );
};

export default Signup;