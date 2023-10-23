'use client';
import axios from 'axios';
import { useState } from 'react';


export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const response = await axios.post('/api/register', {
            email,
            password,
            name,
        });
        setSuccessMessage('Registration successful!');
        setErrorMessage('');
    } catch (error) {
        const err = error as { response: { data: { error: string } } };
        setErrorMessage(err.response?.data?.error || 'An error occurred.');
        setSuccessMessage('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Register</h1>

        {errorMessage && <div className="bg-red-500 text-white p-2 rounded mb-4">{errorMessage}</div>}
        {successMessage && <div className="bg-green-500 text-white p-2 rounded mb-4">{successMessage}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="johndoe@example.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="********"
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
