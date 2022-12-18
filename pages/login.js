import { Form } from '../components/form';
import { useState } from 'react';

function Login() {
  const [activeTab, setActiveTab] = useState('admin');
  const [formData, setFormData] = useState({
    id: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleTabClick = (e) => {
    setActiveTab(e.target.id);
  };

  const fields = [
    { name: 'id', label: 'ID', type: 'text', required: true },
    { name: 'password', label: 'Password', type: 'password', required: true },
  ];

  const handleSubmit = (formData) => {
    // add code to handle form submission here
    console.log(formData);
  };

  return (
    <div className="bg-gray-200 flex flex-col items-center p-4">
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
        <li className="mr-4">
          <button
            id="user"
            className={`${
              activeTab === 'user' ? 'bg-teal-400 text-white' : ''
            } font-bold text-lg rounded-full px-4 py-2`}
            onClick={handleTabClick}
          >
            User
          </button>
        </li>
      </ul>
      <Form
        fields={fields}
        submitText="Log In"
        onSubmit={handleSubmit}
        formData={formData}
        onInputChange={handleInputChange}
      />
    </div>
  );
}

export default Login;
