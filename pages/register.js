import withAdminRoute from '../components/adminRoute';
import { useState } from 'react';
import Button from '../components/button';

const Register = () => {
  const [formState, setFormState] = useState({
    id: '',
    name: '',
    password: '',
    department: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['id', 'name', 'password'];
    requiredFields.forEach((field) => {
      if (!formState[field]) {
        newErrors[field] = 'Required';
      }
    });
    setErrors(newErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();

    // add code to handle form submission here
    console.log(formState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <h1 className="text-3xl font-bold text-center mb-6">Register Enroller</h1>
      {Object.keys(formState).map((field) => (
        <div className="mb-4" key={field}>
          <label className="block font-bold text-gray-700 mb-2" htmlFor={field}>
            {field[0].toUpperCase() + field.slice(1)}
          </label>
          <input
            type={field === 'password' ? 'password' : 'text'}
            name={field}
            id={field}
            value={formState[field]}
            placeholder={`Enter ${field}`}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors[field] && <div className="text-red-500">{errors[field]}</div>}
        </div>
      ))}
      <Button type="submit" className="w-full">
        Register Enroller
      </Button>
    </form>
  );
};

export default withAdminRoute(Register);
