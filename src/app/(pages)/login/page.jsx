"use client"
import './page.css'
import React, { useState } from 'react';
import { primaryBg, secondaryBg } from '../../../../Styles/Global';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter()
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    const loginSignupHandler = async (e) => {
        console.log("clicked")
        let variable = 2
        router.push(`/dashboard/${variable}`)
    };

    return (
        <div style={{backgroundColor:`${primaryBg}`}} className="outermost">
            <div className="outermost-2">
                <div className="left">
                    <div className="upper-left">Hello, How are you doing today?</div>
                    <div className="input">
                        <h1>{isLogin ? 'Login' : 'Signup'}</h1>
                        
                            {!isLogin && (
                                <>
                                    <input
                                        className="input-field"
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <input
                                        className="input-field"
                                        type="text"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </>
                            )}
                            <input
                                className="input-field"
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className="input-field"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="button" onClick={loginSignupHandler}>
                                {isLogin ? 'Sign in' : 'Create Account'}
                            </button>
                            <h3 className="acc">
                                {isLogin ? "Don't have an account?" : 'Already have an account?'}
                                <span className="sig-log" onClick={() => setIsLogin(!isLogin)}>
                                    {isLogin ? 'Signup' : 'Login'}
                                </span>
                            </h3>
                       
                    </div>
                </div>
                <div style={{backgroundColor:secondaryBg}}className="right">
                    <div className="card">
                        <h2 className="">What our users say.</h2>
                        <h2 className="quote">"</h2>
                        <p className="">"Managing and organizing events was never easier."</p>
                        <p className="quote">Try our services.</p>
                        <div className="card-2">
                            <div className="">
                                <div className="card-2-text">Get the right assistance from our team.</div>
                                <div className="card-2-text-2">
                                    Be among the first founders to experience the easiest way to create, manage, and organize events.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
