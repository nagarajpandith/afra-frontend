import { useState } from 'react';
import Button from '../button';

export const Form = ({ fields, submitText, onSubmit, onInputChange }) => {
  const [formState, setFormState] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !formState[field.name]) {
        newErrors[field.name] = 'Required';
      }
    });
    setErrors(newErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();

    onSubmit(formState);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-10 m-5 rounded-lg">
      {fields.map((field) => (
        <div className="mb-4" key={field.name}>
          <label
            className="block font-bold text-gray-700 mb-2"
            htmlFor={field.name}
          >
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            value={formState[field.name]}
            placeholder={field.placeholder}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors[field.name] && (
            <div className="text-red-500">{errors[field.name]}</div>
          )}
        </div>
      ))}
      <Button type="submit">{submitText}</Button>
    </form>
  );
};
