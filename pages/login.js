import { useState } from 'react';
import Button from '../components/button';

function Login() {
  const [activeTab, setActiveTab] = useState('admin');
  const [formData, setFormData] = useState({
    id: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleTabClick = (e) => {
    setActiveTab(e.target.id);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit form data, Check the active tab and call the respective API
    // If validation error, set the error message using setErrorMessage
    // If success, redirect to Scan/home page using Router.push('/scan')
  };

  return (
    <div className="bg-gray-200 p-4 flex flex-col items-center">
      <ul className="flex justify-center">
        <li className="mr-4">
          <button
            id="admin"
            className={`${
              activeTab === 'admin' ? 'bg-teal-400 text-white' : ''
            } font-bold text-lg rounded-full px-4 py-2`}
            onClick={handleTabClick}
          >
            Admin
          </button>
        </li>
        <li>
          <button
            id="enroller"
            className={`${
              activeTab === 'enroller' ? 'bg-teal-400 text-white' : ''
            } font-bold text-lg rounded-full px-4 py-2`}
            onClick={handleTabClick}
          >
            Enroller
          </button>
        </li>
      </ul>
      <div className="p-4 w-full max-w-sm">
        {errorMessage && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="id"
            >
              ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="id"
              type="text"
              placeholder="Enter ID"
              value={formData.id}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id=" password"
              type="password"
              placeholder="Enter Password"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <Button> Login </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
