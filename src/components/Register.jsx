'use client';

import React, { useState } from 'react';
import registerService from '../services/register';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const newUser = await registerService.register({
        username,
        email,
        name,
        password,
      });
      setSuccessMessage(`User ${newUser.username} registered successfully!`);
      setUsername('');
      setEmail('');
      setName('');
      setPassword('');
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
    } catch (exception) {
      setErrorMessage('Failed to register. Please check your input.');
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister} className="mt-24 sm:flex sm:items-center sm:gap-y-6 block text-center">
        <div className='p-2'>
          <span className="text-sm font-semibold leading-6 text-gray-900 font-mono">Username</span>
          <input
            className="border-2 rounded-full border-black w-28 ml-2"
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
            required
          />
        </div>
        <div className='p-2'>
          <span className="text-sm font-semibold leading-6 text-gray-900 font-mono">Email</span>
          <input
            className="border-2 rounded-full border-black w-28 ml-2"
            type="email"
            value={email}
            name="Email"
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </div>
        <div className='p-2'>
          <span className="text-sm font-semibold leading-6 text-gray-900 font-mono">Name</span>
          <input
            className="border-2 rounded-full border-black w-28 ml-2"
            type="text"
            value={name}
            name="Name"
            onChange={({ target }) => setName(target.value)}
            required
          />
        </div>
        <div className='p-2'>
          <span className="text-sm font-semibold leading-6 text-gray-900 font-mono">Password</span>
          <input
            className="border-2 rounded-full border-black w-28 ml-2"
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-mono"
        >
          Register
        </button>
        {errorMessage && <div className="text-red-600">{errorMessage}</div>}
        {successMessage && <div className="text-green-600">{successMessage}</div>}
      </form>
      <p className='text-xs font-semibold leading-6 text-gray-400 font-mono mt-4'>- Password must be at least 6 characters long</p>
    </div>
  );
};

export default Register;
