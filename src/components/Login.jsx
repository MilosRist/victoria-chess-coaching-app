'use client'

import React, { useState } from 'react';
import loginService from '../services/login';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });

      setUser(user);
      window.localStorage.setItem('loggedUser', JSON.stringify(user));
      setSuccessMessage(`Welcome back, ${user.username}!`);
      setUsername('');
      setPassword('');
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
    } catch (exception) {
      setErrorMessage('Incorrect username or password. Please try again.');
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="mt-24 flex items-center justify-center gap-x-6"
      >
        <div>
          <span className="text-sm font-semibold leading-6 text-gray-900 font-mono">
            Username
          </span>
          <input
            className="border-2 rounded-full border-black w-28 ml-2"
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <span className="text-sm font-semibold leading-6 text-gray-900 font-mono">
            Password
          </span>
          <input
            className="border-2 rounded-full border-black w-28 ml-2"
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-mono"
        >
          Login
        </button>
      </form>
      {errorMessage && (
        <div className="text-red-600 text-center font-mono">{errorMessage}</div>
      )}
      {successMessage && (
        <div className="text-green-600 text-center font-mono">{successMessage}</div>
      )}
    </div>
  );
};

export default Login;
