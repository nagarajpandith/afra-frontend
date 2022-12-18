import React, { useState } from 'react';
import { Form } from '../components/Form';

function Enroll() {
  const [formData, setFormData] = useState({
    usn: '',
    code: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const fields = [
    {
      name: 'usn',
      label: 'USN',
      type: 'text',
      required: true,
    },
    {
      name: 'code',
      label: 'Code',
      type: 'text',
      required: true,
    },
  ];

  return <Form fields={fields} submitText="Enroll" onSubmit={handleSubmit} />;
}

export default Enroll;
